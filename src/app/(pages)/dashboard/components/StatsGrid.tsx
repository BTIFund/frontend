/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAccount, useReadContract } from "wagmi";
import { wagmiContractSolarConfig } from "@/app/services/contract";
import { useMemo } from "react";

interface Props {
  totalInvestment: any;
}

export default function StatsGrid({ totalInvestment }: Props) {
  const { address } = useAccount();

  const { data: investedProjectIdsRaw } = useReadContract({
    ...wagmiContractSolarConfig,
    functionName: 'getInvestedProjectIds',
    query: { refetchInterval: 10000 },
  });

  const investedProjectIds = investedProjectIdsRaw as bigint[];

  const { data: monthlyReturnsRaw } = useReadContract({
    ...wagmiContractSolarConfig,
    functionName: 'getUserMonthlyReturns',
    query: { refetchInterval: 10000 },
    args: [address],
  });

  const monthlyReturns = useMemo(() => {
    if (!monthlyReturnsRaw) return 0;
    try {
      return (monthlyReturnsRaw as bigint).toString();
    } catch {
      return 0;
    }
  }, [monthlyReturnsRaw]);

  const { data: annuallyReturnsRaw } = useReadContract({
    ...wagmiContractSolarConfig,
    functionName: 'getUserAnnualReturns',
    query: { refetchInterval: 10000 },
    args: [address],
  });

  const annuallyReturns = useMemo(() => {
    if (!annuallyReturnsRaw) return 0;
    try {
      return (annuallyReturnsRaw as bigint).toString();
    } catch {
      return 0;
    }
  }, [annuallyReturnsRaw]);

  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;

  const { data: carbonOffsetRaw } = useReadContract({
    ...wagmiContractSolarConfig,
    functionName: 'getUserCarbonOffset',
    args: [address, BigInt(currentYear), BigInt(currentMonth)],
    query: { refetchInterval: 10000 },
  });

  const carbonOffset = carbonOffsetRaw ? carbonOffsetRaw.toString() : '0';

  const statItems = useMemo(() => {
    return [
      { label: "Total Invested", value: totalInvestment, suffix: "IDRX" },
      { label: "Active Projects", value: investedProjectIds?.length.toString() },
      { label: "Monthly Returns", value: monthlyReturns, suffix: "IDRX" },
      { label: "Annual Returns", value: annuallyReturns, suffix: "IDRX" },
      { label: "Carbon Offset", value: carbonOffset, suffix: "Tons CO₂" },
    ];
  }, [investedProjectIds, annuallyReturns, carbonOffset, monthlyReturns, totalInvestment]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {statItems.map((item, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow">
          <div className="text-gray-500 text-sm mb-1">{item.label}</div>
          <div className="flex items-center">
            <div className="text-2xl font-bold">{item.value || 0}</div>
            {item.suffix && (
              <div className="text-sm ml-2 text-gray-500">{item.suffix}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}