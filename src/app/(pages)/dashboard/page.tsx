"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sun,
  Zap,
  Wallet,
  Users,
  ChevronDown,
  Clock,
  Leaf,
  CheckCircle,
  Home,
  BarChart2,
  Settings,
  PlusCircle,
  LogOut,
  Search,
  AlertCircle,
  HelpCircle,
  ArrowUpRight,
  ChevronRight,
  Percent,
  MapPin,
  Calendar,
  Activity,
  DollarSign,
} from "lucide-react";
import BTILogo from "../../../../public/img/bti-logo.png";
import BTIProject1 from "../../../../public/img/bti-project-1.webp";
import BTIProject2 from "../../../../public/img/bti-project-2.webp";
import BTIProject3 from "../../../../public/img/bti-project-3.webp";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [investorView, setInvestorView] = useState(true);
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  // Sample data for the dashboard
  const portfolioStats = {
    totalInvested: "4,250.00",
    activeProjects: 3,
    monthlyReturns: "43.56",
    annualReturns: "11.5%",
    carbonOffset: "1.2",
  };

  const projects = [
    {
      id: 1,
      name: "Surabaya Commercial Rooftop",
      location: "Surabaya, East Java",
      image: BTIProject1,
      capacity: "250 kWp",
      invested: "1,500.00",
      returns: "12%",
      funded: "70%",
      fundedAmount: "175,000",
      goalAmount: "250,000",
      status: "Funding",
      nextPayout: "June 15, 2025",
      lastClaim: "May 1, 2025",
    },
    {
      id: 2,
      name: "Bali Resort Solar Farm",
      location: "Kuta, Bali",
      image: BTIProject2,
      capacity: "500 kWp",
      invested: "2,000.00",
      returns: "10%",
      funded: "45%",
      fundedAmount: "225,000",
      goalAmount: "500,000",
      status: "Funding",
      nextPayout: "N/A",
      lastClaim: "N/A",
    },
    {
      id: 3,
      name: "Jakarta Office Complex",
      location: "Jakarta, Java",
      image: BTIProject3,
      capacity: "350 kWp",
      invested: "750.00",
      returns: "11.5%",
      funded: "100%",
      fundedAmount: "350,000",
      goalAmount: "350,000",
      status: "Active",
      nextPayout: "May 30, 2025",
      lastClaim: "April 30, 2025",
    },
  ];

  const transactions = [
    {
      id: 1,
      type: "Investment",
      project: "Surabaya Commercial Rooftop",
      amount: "1,500.00",
      date: "April 10, 2025",
      status: "Completed",
    },
    {
      id: 2,
      type: "Return",
      project: "Jakarta Office Complex",
      amount: "14.22",
      date: "April 30, 2025",
      status: "Completed",
    },
    {
      id: 3,
      type: "Investment",
      project: "Bali Resort Solar Farm",
      amount: "2,000.00",
      date: "March 22, 2025",
      status: "Completed",
    },
    {
      id: 4,
      type: "Return",
      project: "Jakarta Office Complex",
      amount: "14.22",
      date: "March 30, 2025",
      status: "Completed",
    },
  ];

  // Developer sample data
  const developerProjects = [
    {
      id: 1,
      name: "Bandung School Campus",
      location: "Bandung, West Java",
      image: BTIProject2,
      capacity: "175 kWp",
      fundingGoal: "175,000",
      fundingRaised: "87,500",
      returns: "9.5%",
      deadline: "June 30, 2025",
      status: "Funding",
    },
    {
      id: 2,
      name: "Yogyakarta Shopping Mall",
      location: "Yogyakarta, Java",
      image: BTIProject3,
      capacity: "400 kWp",
      fundingGoal: "400,000",
      fundingRaised: "400,000",
      returns: "11%",
      deadline: "N/A",
      status: "Active",
    },
  ];

  const developerStats = {
    totalRaised: "487,500",
    activeProjects: 2,
    totalCapacity: "575",
    totalInvestors: 167,
  };

  const monthlyDistributions = [
    {
      id: 1,
      project: "Yogyakarta Shopping Mall",
      amount: "3,666.67",
      date: "April 30, 2025",
      status: "Distributed",
    },
    {
      id: 2,
      project: "Yogyakarta Shopping Mall",
      amount: "3,666.67",
      date: "March 30, 2025",
      status: "Distributed",
    },
  ];

  // Function to render the appropriate tab content
  const renderTabContent = () => {
    if (investorView) {
      switch (activeTab) {
        case "overview":
          return renderInvestorOverview();
        case "projects":
          return renderInvestorProjects();
        case "transactions":
          return renderTransactions();
        case "settings":
          //   return renderSettings();
          return <div>Settings</div>;
        default:
          return renderInvestorOverview();
      }
    } else {
      switch (activeTab) {
        case "overview":
          //   return renderDeveloperOverview();
          return <div>Developer Overview</div>;
        case "projects":
          //   return renderDeveloperProjects();
          return <div>Developer Projects</div>;
        case "distributions":
          //   return renderDistributions();
          return <div>Monthly Distributions</div>;
        case "settings":
          //   return renderSettings();
          return <div>Settings</div>;
        default:
          //   return renderDeveloperOverview();
          return <div>Developer Overview</div>;
      }
    }
  };

  // Investor overview tab content
  const renderInvestorOverview = () => {
    return (
      <div className="space-y-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-gray-500 text-sm mb-1">Total Invested</div>
            <div className="flex items-center">
              <div className="text-2xl font-bold">
                {portfolioStats.totalInvested}
              </div>
              <div className="text-sm ml-2 text-gray-500">IDRX</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-gray-500 text-sm mb-1">Active Projects</div>
            <div className="text-2xl font-bold">
              {portfolioStats.activeProjects}
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-gray-500 text-sm mb-1">Monthly Returns</div>
            <div className="flex items-center">
              <div className="text-2xl font-bold">
                {portfolioStats.monthlyReturns}
              </div>
              <div className="text-sm ml-2 text-gray-500">IDRX</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-gray-500 text-sm mb-1">Annual Returns</div>
            <div className="text-2xl font-bold">
              {portfolioStats.annualReturns}
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-gray-500 text-sm mb-1">Carbon Offset</div>
            <div className="flex items-center">
              <div className="text-2xl font-bold">
                {portfolioStats.carbonOffset}
              </div>
              <div className="text-sm ml-2 text-gray-500">Tons CO₂</div>
            </div>
          </div>
        </div>

        {/* Portfolio Visualization */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold">Portfolio Performance</h3>
          </div>
          <div className="p-6">
            <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-500">Performance Chart</p>
                <p className="text-sm text-gray-400">
                  (Chart visualization would go here)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Investments */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-lg font-semibold">Your Investments</h3>
            <Link
              href="#"
              className="text-blue-900 text-sm hover:underline flex items-center"
            >
              View All <ChevronRight size={16} />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Project
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Invested
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Returns
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Next Payout
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {projects.map((project) => (
                  <tr key={project.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0 mr-3">
                          <Image
                            src={project.image}
                            width={40}
                            height={40}
                            className="rounded-md"
                            alt={project.name}
                          />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            {project.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {project.capacity}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {project.invested} IDRX
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {project.returns}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          project.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {project.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {project.nextPayout}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {project.status === "Active" ? (
                        <button className="text-blue-900 hover:text-blue-700 font-semibold">
                          Claim Returns
                        </button>
                      ) : (
                        <span className="text-gray-400">Pending</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-lg font-semibold">Recent Transactions</h3>
            <Link
              href="#"
              className="text-blue-900 text-sm hover:underline flex items-center"
            >
              View All <ChevronRight size={16} />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Project
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {transactions.slice(0, 3).map((tx) => (
                  <tr key={tx.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          tx.type === "Investment"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {tx.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {tx.project}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {tx.type === "Investment" ? "-" : "+"}
                      {tx.amount} IDRX
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {tx.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {tx.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  // Investor projects tab content
  const renderInvestorProjects = () => {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Solar Projects</h2>
          <div className="flex space-x-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects..."
                className="border border-gray-300 rounded-md px-4 py-2 pl-10"
              />
              <Search
                className="absolute left-3 top-2.5 text-gray-400"
                size={16}
              />
            </div>
            <select className="border border-gray-300 rounded-md px-4 py-2">
              <option>All Projects</option>
              <option>My Investments</option>
              <option>Funding</option>
              <option>Active</option>
              <option>Completed</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  layout="fill"
                  objectFit="cover"
                  alt={project.name}
                />
                <div
                  className={`absolute top-4 right-4 text-sm font-semibold px-2 py-1 rounded ${
                    project.status === "Active"
                      ? "bg-green-500 text-white"
                      : "bg-yellow-500 text-black"
                  }`}
                >
                  {project.status}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{project.name}</h3>
                <div className="flex items-center text-gray-600 text-sm mb-2">
                  <MapPin size={14} className="mr-1" /> {project.location}
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-gray-500 text-xs">Capacity</div>
                    <div className="font-semibold flex items-center">
                      <Zap size={14} className="mr-1 text-yellow-500" />{" "}
                      {project.capacity}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs">Returns</div>
                    <div className="font-semibold flex items-center">
                      <Percent size={14} className="mr-1 text-yellow-500" />{" "}
                      {project.returns}
                    </div>
                  </div>
                </div>

                {project.status === "Funding" && (
                  <>
                    <div className="h-2 bg-gray-200 rounded-full mb-2">
                      <div
                        className="h-2 bg-yellow-500 rounded-full"
                        style={{ width: project.funded }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm mb-4">
                      <span>Funded: {project.fundedAmount} IDRX</span>
                      <span>Goal: {project.goalAmount} IDRX</span>
                    </div>
                  </>
                )}

                {project.status === "Active" && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Your investment:</span>
                      <span>{project.invested} IDRX</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Last claim:</span>
                      <span>{project.lastClaim}</span>
                    </div>
                  </div>
                )}

                <div className="flex gap-2">
                  {project.status === "Active" ? (
                    <button className="flex-1 bg-blue-900 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded-md transition duration-300">
                      Claim Returns
                    </button>
                  ) : (
                    <button className="flex-1 bg-blue-900 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded-md transition duration-300">
                      Invest Now
                    </button>
                  )}
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-md transition duration-300">
                    <HelpCircle size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Transactions tab content
  const renderTransactions = () => {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Transaction History</h2>
          <div className="flex space-x-2">
            <select className="border border-gray-300 rounded-md px-4 py-2">
              <option>All Types</option>
              <option>Investments</option>
              <option>Returns</option>
              <option>Withdrawals</option>
            </select>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-md transition duration-300">
              Export CSV
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transaction ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Project
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transactions.map((tx) => (
                <tr key={tx.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    #{tx.id.toString().padStart(6, "0")}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        tx.type === "Investment"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {tx.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {tx.project}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {tx.type === "Investment" ? "-" : "+"}
                    {tx.amount} IDRX
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {tx.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  // Main render function
  return (
    <div className="container mx-auto p-6 text-gray-900">
      <div className="flex items-center justify-between mb-6 text-white">
        <div className="flex items-center space-x-4">
          <Image src={BTILogo} alt="BTI Logo" width={40} height={40} />
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <button
          onClick={() => setShowAccountMenu(!showAccountMenu)}
          className="flex items-center space-x-2 text-gray-700"
        >
          <Image
            src="/path/to/profile-pic.jpg"
            alt="Profile Picture"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span>Account</span>
          <ChevronDown size={16} />
        </button>
      </div>

      {/* Account Menu */}
      {showAccountMenu && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <ul className="py-1" role="menu" aria-orientation="vertical">
            <li>
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Tabs */}
      <div className="mt-6 flex space-x-4 border-b border-gray-200 text-white">
        <button
          onClick={() => setActiveTab("overview")}
          className={`pb-2 font-semibold ${
            activeTab === "overview" ? "border-b-2 border-blue-900" : ""
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("projects")}
          className={`pb-2 font-semibold $
            activeTab === "projects" ? "border-b-2 border-blue-900" : ""
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => setActiveTab("transactions")}
          className={`pb-2 font-semibold ${
            activeTab === "transactions" ? "border-b-2 border-blue-900" : ""
          }`}
        >
          Transactions
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-6">{renderTabContent()}</div>
    </div>
  );
}
