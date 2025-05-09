"use client";

import { useState } from "react";
import DashboardHeader from "./components/DashboardHeader";
import DashboardTabs from "./components/DashboardTabs";
import InvestorOverview from "./components/InvestorOverview";
import ProjectsView from "./components/ProjectsView";
import TransactionsView from "./components/TransactionsView";
import { useProjectData } from "./data/useProjectData";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const { 
    stats, 
    projects, 
    transactions 
  } = useProjectData();

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <InvestorOverview
            stats={stats}
            projects={projects}
            transactions={transactions}
          />
        );
      case "projects":
        return <ProjectsView projects={projects} />
      case "transactions":
        return <TransactionsView transactions={transactions} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 container mx-auto p-6 text-gray-900">
      <DashboardHeader />
      <DashboardTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="mt-6">{renderTabContent()}</div>
    </div>
  );
}
