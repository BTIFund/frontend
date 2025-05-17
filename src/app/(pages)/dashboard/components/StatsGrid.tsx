import { useAccount, useReadContract } from "wagmi";
import { wagmiContractSolarConfig } from "@/app/services/contract";
import { useMemo } from "react";

interface Props {
  totalInvestment: bigint;
}

export default function StatsGrid({ totalInvestment }: Props) {
  const { address, isConnected } = useAccount();

  // Invested Project IDs
  const { data: investedProjectIdsRaw } = useReadContract({
    ...wagmiContractSolarConfig,
    functionName: 'getInvestedProjectIds',
    query: { enabled: isConnected, refetchInterval: 10000 },
    args: [address],
  });
  const investedProjectIds = (investedProjectIdsRaw as bigint[]) || [];

  // Monthly Returns
  const { data: monthlyReturnsRaw } = useReadContract({
    ...wagmiContractSolarConfig,
    functionName: 'getUserMonthlyReturns',
    query: { enabled: isConnected, refetchInterval: 10000 },
    args: [address],
  });
  const monthlyReturns = (monthlyReturnsRaw as bigint) ?? 0n;

  // Annual Returns
  const { data: annuallyReturnsRaw } = useReadContract({
    ...wagmiContractSolarConfig,
    functionName: 'getUserAnnualReturns',
    query: { enabled: isConnected, refetchInterval: 10000 },
    args: [address],
  });
  const annuallyReturns = (annuallyReturnsRaw as bigint) ?? 0n;

  // Carbon Offset
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;

  const { data: carbonOffsetRaw } = useReadContract({
    ...wagmiContractSolarConfig,
    functionName: 'getUserCarbonOffset',
    query: { enabled: isConnected, refetchInterval: 10000 },
    args: [address, BigInt(currentYear), BigInt(currentMonth)],
  });
  const carbonOffset = (carbonOffsetRaw as bigint) ?? 0n;

  // UI Formatting
  const formatBigInt = (value: bigint) => value.toLocaleString();

  const statItems = useMemo(() => [
    { label: "Total Invested", value: formatBigInt(totalInvestment), suffix: "IDRX" },
    { label: "Active Projects", value: investedProjectIds.length.toString() },
    { label: "Monthly Returns", value: formatBigInt(monthlyReturns), suffix: "IDRX" },
    { label: "Annual Returns", value: formatBigInt(annuallyReturns), suffix: "IDRX" },
    { label: "Carbon Offset", value: formatBigInt(carbonOffset), suffix: "Tons CO₂" },
  ], [totalInvestment, investedProjectIds, monthlyReturns, annuallyReturns, carbonOffset]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {statItems.map((item, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow">
          <div className="text-gray-500 text-sm mb-1">{item.label}</div>
          <div className="flex items-center">
            <div className="text-2xl font-bold">{item.value}</div>
            {item.suffix && (
              <div className="text-sm ml-2 text-gray-500">{item.suffix}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
