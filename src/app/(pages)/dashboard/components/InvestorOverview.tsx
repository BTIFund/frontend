/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronRight } from "lucide-react";
import StatsGrid from "./StatsGrid";
import PerformanceChart from "./PerformanceChart";
import ProjectsTable from "./ProjectsTable";
import TransactionsTable from "./TransactionsTable";
import { TransactionDisplay } from "../types/transaction.types";

interface InvestorOverviewProps {
  totalInvestment: any;
  projects: any[];
  transactions: TransactionDisplay[];
}

export default function InvestorOverview({ totalInvestment, projects, transactions }: InvestorOverviewProps) {
  return (
    <div className="space-y-8">
      <StatsGrid totalInvestment={totalInvestment} />
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Portfolio Performance</h2>
          <PerformanceChart />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Your Investments</h2>
          <button className="text-blue-600 text-sm hover:text-blue-700 flex items-center gap-1">
            View All <ChevronRight size={16} />
          </button>
        </div>
        <ProjectsTable projects={projects} />
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Recent Transactions</h2>
          <button className="text-blue-600 text-sm hover:text-blue-700 flex items-center gap-1">
            View All <ChevronRight size={16} />
          </button>
        </div>
        <TransactionsTable transactions={transactions.slice(0, 5)} />
      </div>
    </div>
  );
}