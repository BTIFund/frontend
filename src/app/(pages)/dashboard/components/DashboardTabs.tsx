interface DashboardTabsProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
  }
  
  export default function DashboardTabs({ activeTab, onTabChange }: DashboardTabsProps) {
    const tabs = [
      { id: "overview", label: "Overview" },
      { id: "projects", label: "Projects" },
      { id: "transactions", label: "Transactions" },
    ];
  
    return (
      <div className="border-b border-gray-200">
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`py-4 px-1 relative font-medium text-sm hover:text-gray-700 transition-colors
                ${activeTab === tab.id 
                  ? "text-blue-600 border-b-2 border-blue-600" 
                  : "text-gray-500"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    );
  }