import { useState } from "react";
import { mockProjects, mockTransactions, mockStats } from "./mockData";

export function useProjectData() {
  const [data] = useState({
    stats: mockStats,
    projects: mockProjects,
    transactions: mockTransactions,
  });

  // You can add real API calls here later
  
  return data;
}