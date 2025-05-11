import { useReadContract } from "wagmi";
import { PortfolioStats } from "../types/portofolio-stats.types";
import { wagmiContractSolarConfig } from "@/app/services/contract";
import { useMemo } from "react";

interface Props {
  stats: PortfolioStats;
}

export default function StatsGrid({ stats }: Props) {
  const { data: activeProjects } = useReadContract({
    ...wagmiContractSolarConfig,
    functionName: 'getProjectCount',
    query: { refetchInterval: 10000 },
  });


  const statItems = useMemo(() => {
    return [
      { label: "Total Invested", value: stats.totalInvested, suffix: "IDRX" },
      { label: "Active Projects", value: activeProjects?.toString() },
      { label: "Monthly Returns", value: stats.monthlyReturns, suffix: "IDRX" },
      { label: "Annual Returns", value: stats.annualReturns },
      { label: "Carbon Offset", value: stats.carbonOffset, suffix: "Tons CO₂" },
    ];
  }, [activeProjects]);

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