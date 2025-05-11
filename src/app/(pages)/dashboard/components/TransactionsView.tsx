/* eslint-disable @typescript-eslint/no-explicit-any */
import { Download, Filter } from "lucide-react";

interface TransactionsViewProps {
  transactions: any[];
}

export default function TransactionsView({ transactions }: TransactionsViewProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Transaction History</h2>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 text-sm text-gray-600 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Types</option>
              <option>Investments</option>
              <option>Returns</option>
              <option>Withdrawals</option>
            </select>
            <Filter className="absolute right-2 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
          
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-lg text-sm font-medium transition-colors">
            <Download size={16} />
            Export CSV
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Transaction ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
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
              <tr key={tx.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  #{tx.id.toString().padStart(6, "0")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${tx.type === "Investment" 
                      ? "bg-blue-100 text-blue-800" 
                      : "bg-green-100 text-green-800"
                    }`}>
                    {tx.type}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {tx.type === "Investment" ? "-" : "+"}
                  {tx.amount} IDRX
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {tx.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
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
}