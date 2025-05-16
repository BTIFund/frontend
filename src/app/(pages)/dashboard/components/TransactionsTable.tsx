// import Image from "next/image";
import { TransactionDisplay } from "../types/transaction.types";
import { Loader2 } from "lucide-react";

interface TransactionsTableProps {
  transactions: TransactionDisplay[];
  isLoading?: boolean;
}

export default function TransactionsTable({ transactions, isLoading }: TransactionsTableProps) {
  const isEmpty = !transactions || transactions.length === 0;

  return (
    <div className="overflow-x-auto relative">
      {isLoading ? (
        <div className="flex justify-center items-center py-10">
          <Loader2 className="animate-spin text-gray-500" size={24} />
          <span className="ml-2 text-sm text-gray-500">Loading transactions...</span>
        </div>
      ) : isEmpty ? (
        <div className="flex flex-col items-center justify-center py-10 text-center text-gray-500">
          {/* <Image src="/empty-state.svg" alt="No transactions" width={150} height={150} /> */}
          <p className="mt-4 text-sm">You have no transaction history yet.</p>
        </div>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map((tx) => (
              <tr key={tx.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  #{tx.id.toString().padStart(6, "0")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full
                    ${tx.type === "Investment"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-green-100 text-green-800"
                    }`}>
                    {tx.type}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{tx.project}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <span className={tx.type === "Investment" ? "text-red-600" : "text-green-600"}>
                    {tx.type === "Investment" ? "-" : "+"}
                    {tx.amount} IDRX
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tx.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
