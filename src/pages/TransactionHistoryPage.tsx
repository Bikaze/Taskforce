import { useState } from "react";
import { Download, Filter } from "lucide-react";
import TransactionTable from "../components/TransactionTable";
import ReportModal from "../components/ReportModal";
import { Transaction } from "../types/transaction";

const TransactionHistoryPage = () => {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: "all",
    type: "all",
    startDate: "",
    endDate: "",
  });

  const mockTransactions: Transaction[] = [
    {
      id: "1",
      accountId: "accountId1" as any,
      type: "INCOME",
      amount: 500000,
      note: "Salary Deposit",
      date: new Date(),
      categoryId: "category1" as any,
    },
    {
      id: "2",
      accountId: "accountId1" as any,
      budgetId: "budget1" as any,
      type: "EXPENSE",
      amount: 25000,
      note: "Grocery Shopping",
      date: new Date(),
      categoryId: "category2" as any,
    },
  ];

  return (
    <div className="space-y-4 sm:space-y-6 p-4 sm:p-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">Transaction History</h1>
          <p className="text-sm sm:text-base text-gray-500">
            View all your transactions
          </p>
        </div>
        <button
          onClick={() => setIsReportModalOpen(true)}
          className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-600 text-white text-sm sm:text-base rounded-lg hover:bg-blue-700 w-full sm:w-auto justify-center"
        >
          <Download className="w-4 h-4" />
          Generate Report
        </button>
      </div>

      {/* Filters Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <select
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          className="px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm sm:text-base w-full"
        >
          <option value="all">All Categories</option>
          <option value="food">Food & Drinks</option>
          <option value="transport">Transport</option>
          <option value="salary">Salary</option>
        </select>

        <select
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          className="px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm sm:text-base w-full"
        >
          <option value="all">All Types</option>
          <option value="INCOME">Income</option>
          <option value="EXPENSE">Expense</option>
        </select>

        <input
          type="date"
          value={filters.startDate}
          onChange={(e) =>
            setFilters({ ...filters, startDate: e.target.value })
          }
          className="px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm sm:text-base w-full"
          placeholder="Start Date"
        />

        <input
          type="date"
          value={filters.endDate}
          onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
          className="px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm sm:text-base w-full"
          placeholder="End Date"
        />
      </div>

      {/* Transactions Table Section */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b">
          <h3 className="text-lg sm:text-xl font-semibold">
            Recent Transactions
          </h3>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-500">
              {mockTransactions.length} transactions found
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <TransactionTable transactions={mockTransactions} />
        </div>
      </div>

      <ReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
      />
    </div>
  );
};

export default TransactionHistoryPage;
