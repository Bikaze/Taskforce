interface Transaction {
  name: string;
  amount: number;
  date: string;
  bank: string;
  category: string;
  type: "income" | "expense";
}

interface TransactionTableProps {
  transactions: Transaction[];
}

const TransactionTable: React.FC<TransactionTableProps> = ({
  transactions,
}) => (
  <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-lg lg:text-xl font-semibold">Recent transactions</h3>
      <button className="text-blue-500">View all</button>
    </div>

    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px]">
        <thead className="text-left text-gray-500">
          <tr>
            <th className="pb-4">Transaction</th>
            <th className="pb-4">Amount</th>
            <th className="pb-4">Date</th>
            <th className="pb-4">Bank</th>
            <th className="pb-4">Category</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index} className="border-t border-gray-100">
              <td className="py-4">{transaction.name}</td>
              <td
                className={`py-4 ${
                  transaction.type === "expense"
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                ${Math.abs(transaction.amount).toFixed(2)}
              </td>
              <td className="py-4 text-gray-500">{transaction.date}</td>
              <td className="py-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    transaction.type === "expense"
                      ? "bg-red-100 text-red-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {transaction.bank}
                </span>
              </td>
              <td className="py-4">
                <span className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600">
                  {transaction.category}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default TransactionTable;
