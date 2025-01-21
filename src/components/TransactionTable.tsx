import { Transaction } from "../types/transaction";
import { format } from "date-fns";

interface TransactionTableProps {
  transactions: Transaction[];
}

const TransactionTable: React.FC<TransactionTableProps> = ({
  transactions,
}) => (
  <div className="overflow-x-auto">
    <table className="w-full min-w-[800px]">
      <thead className="text-left text-gray-500 border-b">
        <tr>
          <th className="p-4">Note</th>
          <th className="p-4">Amount</th>
          <th className="p-4">Type</th>
          <th className="p-4">Date</th>
          <th className="p-4">Budget</th>
          <th className="p-4">Category</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id} className="border-b hover:bg-gray-50">
            <td className="p-4">{transaction.note}</td>
            <td
              className={`p-4 ${
                transaction.type === "EXPENSE"
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {transaction.amount.toLocaleString()} RWF
            </td>
            <td className="p-4">
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  transaction.type === "EXPENSE"
                    ? "bg-red-100 text-red-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {transaction.type}
              </span>
            </td>
            <td className="p-4 text-gray-500">
              {format(new Date(transaction.date), "MMM dd, yyyy HH:mm")}
            </td>
            <td className="p-4 text-gray-500">
              {transaction.budgetId ? "Linked" : "No Budget"}
            </td>
            <td className="p-4">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm">
                {transaction.categoryId ? "Categorized" : "Uncategorized"}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TransactionTable;
