import { Transaction } from "../types/transaction";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

interface TransactionTableProps {
  transactions: Transaction[];
}

const TransactionTable: React.FC<TransactionTableProps> = ({
  transactions,
}) => {
  const navigate = useNavigate();

  const handleRowClick = (id: string) => {
    navigate(`/transactions/${id}`);
  };

  return (
    <>
      {/* Mobile view */}
      <div className="block sm:hidden">
        <div className="divide-y divide-gray-200">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="p-4 hover:bg-gray-50 cursor-pointer"
              onClick={() => handleRowClick(transaction.id)}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">
                    {transaction.note}
                  </p>
                  <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                    <span>
                      {format(new Date(transaction.date), "MMM dd, yyyy")}
                    </span>
                    <span>•</span>
                    <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                      {transaction.categoryId || "Uncategorized"}
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Note
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => handleRowClick(transaction.id)}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
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
                  <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                    {transaction.categoryId || "Uncategorized"}
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
};

export default TransactionTable;
