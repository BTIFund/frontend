/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, useMemo } from "react";
import DashboardTabs from "./components/DashboardTabs";
import InvestorOverview from "./components/InvestorOverview";
import ProjectsView from "./components/ProjectsView";
import TransactionsView from "./components/TransactionsView";
import { useAccount, usePublicClient, useReadContract } from "wagmi";
import { wagmiContractSolarConfig } from "@/app/services/contract";
import { readContract } from "viem/actions";
import { Transaction } from "./types/transaction.types";
import { mapTransactionsToDisplay } from "@/app/utils/utils";
import { Project } from "./types/project.types";
import { mockTransactions } from "./data/mockData";

export default function Dashboard() {
  const { address } = useAccount();
  const publicClient = usePublicClient();
  const [totalInvested, setTotalInvested] = useState<bigint>(BigInt(0));
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeTab, setActiveTab] = useState("overview");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { data: investedProjectIdsRaw } = useReadContract({
    ...wagmiContractSolarConfig,
    functionName: "getInvestedProjectIds",
    query: {
      refetchInterval: 10000,
      enabled: !!address,
    },
  });

  const investedProjectIds = investedProjectIdsRaw as bigint[] | undefined;

  const formatDate = (timestamp: bigint): string => {
    const date = new Date(Number(timestamp) * 1000);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  useEffect(() => {
    const fetchInvestments = async () => {
      if (!publicClient || !address || !investedProjectIds?.length) return;
      setLoading(true);

      try {
        const investmentPromises = investedProjectIds.map((projectId) =>
          readContract(publicClient, {
            address: wagmiContractSolarConfig.address,
            abi: wagmiContractSolarConfig.abi,
            functionName: "investments",
            args: [projectId, address],
          })
        );

        const investmentResults = await Promise.all(investmentPromises);

        const total = investmentResults.reduce((sum: bigint, investment: any) => {
          return sum + BigInt(investment.amount);
        }, BigInt(0));

        setTotalInvested(total);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch investments:", err);
        setError("Gagal memuat data investasi.");
      } finally {
        setLoading(false);
      }
    };

    fetchInvestments();
  }, [publicClient, address, investedProjectIds]);

  useEffect(() => {
    const fetchInvestmentDetails = async () => {
      if (!publicClient || !address || !investedProjectIds?.length) return;

      setLoading(true);

      try {
        const details = await Promise.all(
          investedProjectIds.map(async (id) => {
            const [projectDetailRaw, investmentDetailRaw] = await Promise.all([
              readContract(publicClient, {
                address: wagmiContractSolarConfig.address,
                abi: wagmiContractSolarConfig.abi,
                functionName: "getProjectDetails",
                args: [id],
              }) as Promise<{
                name: string;
                image: string;
                capacity: string;
                active: boolean;
              }>,

              readContract(publicClient, {
                address: wagmiContractSolarConfig.address,
                abi: wagmiContractSolarConfig.abi,
                functionName: "investments",
                args: [id, address],
              }) as Promise<{
                amount: bigint;
                claimedReturns: bigint;
                lastClaimDate: bigint;
              }>,
            ]);

            return {
              id,
              name: projectDetailRaw.name,
              image: projectDetailRaw.image,
              capacity: `${projectDetailRaw.capacity} kWp`,
              invested: investmentDetailRaw.amount,
              returns: investmentDetailRaw.claimedReturns,
              status: projectDetailRaw.active ? "Active" : "Inactive",
              nextPayout: formatDate(investmentDetailRaw.lastClaimDate),
            };
          })
        );

        setProjects(details);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch project details:", err);
        setError("Gagal memuat detail proyek.");
      } finally {
        setLoading(false);
      }
    };

    fetchInvestmentDetails();
  }, [publicClient, address, investedProjectIds]);

  const { data: transactionsRaw } = useReadContract({
    ...wagmiContractSolarConfig,
    functionName: "getUserTransactionHistory",
    args: [address],
    query: {
      refetchInterval: 10000,
      enabled: !!address,
    },
  });

  const transactions = transactionsRaw as Transaction[] | undefined;

  const transactionsDisplay = useMemo(
    () => mapTransactionsToDisplay(transactions || [], projects),
    [transactions, projects]
  );
  
  const renderTabContent = () => {
    if (loading) {
      return <p className="text-center text-gray-600">Loading data...</p>;
    }

    if (error) {
      return <p className="text-center text-red-500">{error}</p>;
    }

    switch (activeTab) {
      case "overview":
        return (
          <InvestorOverview
            totalInvestment={totalInvested}
            projects={projects}
            transactions={transactionsDisplay ?? []}
          />
        );
      case "projects":
        return <ProjectsView />;
      case "transactions":
        return <TransactionsView transactions={transactionsDisplay.length === 0 ? mockTransactions : transactionsDisplay} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 container mx-auto p-6 text-gray-900">
      <DashboardTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="mt-6">{renderTabContent()}</div>
    </div>
  );
}
