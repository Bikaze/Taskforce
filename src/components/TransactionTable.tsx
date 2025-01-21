import { Transaction } from "../types/transaction";
import { format } from "date-fns";

interface TransactionTableProps {
  transactions: Transaction[];
}

const TransactionTable: React.FC<TransactionTableProps> = ({
  transactions,
}) => (
  <>
    {/* Mobile view */}
    <div className="block sm:hidden">
      <div className="divide-y divide-gray-200">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="p-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className="font-medium text-gray-900">{transaction.note}</p>
                <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                  <span>
                    {format(new Date(transaction.date), "MMM dd, yyyy")}
                  </span>
                  <span>•</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      transaction.type === "EXPENSE"
                        ? "bg-red-100 text-red-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {transaction.type}
                  </span>
                </div>
              </div>
              <div
                className={`text-right ${
                  transaction.type === "EXPENSE"
                    ? "text-red-600"
                    : "text-green-600"
                }`}
              >
                {transaction.amount.toLocaleString()} RWF
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Desktop view */}
    <div className="hidden sm:block">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Transaction
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Amount
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Type
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Date
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {transaction.note}
              </td>
              <td
                className={`px-6 py-4 whitespace-nowrap text-sm ${
                  transaction.type === "EXPENSE"
                    ? "text-red-600"
                    : "text-green-600"
                }`}
              >
                {transaction.amount.toLocaleString()} RWF
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    transaction.type === "EXPENSE"
                      ? "bg-red-100 text-red-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {transaction.type}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {format(new Date(transaction.date), "MMM dd, yyyy")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
);

export default TransactionTable;
