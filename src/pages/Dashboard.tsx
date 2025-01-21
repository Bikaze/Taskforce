import { Menu } from "lucide-react";
import { useState } from "react";
import BalanceCard from "../components/BalanceCard";
import BudgetCard from "../components/BudgetCard";
import CategoryItem from "../components/CategoryItem";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TransactionTable from "../components/TransactionTable";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const transactions = [
    {
      name: "Salary Deposit",
      amount: 5000.0,
      type: "income" as "income",
      date: "Wed, Apr 24, 5:30 AM",
      bank: "BK",
      category: "Salary",
    },
    {
      name: "Uber Ride",
      amount: 25.4,
      type: "expense" as "expense",
      date: "Wed, Apr 24, 5:30 AM",
      bank: "Equity",
      category: "Travel",
    },
  ];

  const accounts = [
    { name: "Main Account", balance: 5000, color: "#0088FE" },
    { name: "Savings", balance: 3000, color: "#00C49F" },
    { name: "Investment", balance: 2000, color: "#FFBB28" },
  ];

  const budgets = [
    { category: "Shopping", spent: 800, budget: 1000 },
    { category: "Food & Drinks", spent: 950, budget: 1000 },
    { category: "Transportation", spent: 1200, budget: 1000 },
    { category: "Housing", spent: 2800, budget: 3000 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex relative">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-40 p-2 rounded-md bg-white shadow-md"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} />

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-20"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-8 pt-16 lg:pt-8 w-full overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <Header user="Adrian" />

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-8">
            {/* Main Content Area */}
            <div className="xl:col-span-2 space-y-4">
              <BalanceCard
                accounts={accounts}
                totalBalance={accounts.reduce(
                  (sum, account) => sum + account.balance,
                  0
                )}
              />
              <div className="overflow-x-auto bg-white rounded-xl shadow-sm">
                <TransactionTable transactions={transactions} />
              </div>
            </div>

            {/* Sidebar Content */}
            <div className="space-y-4 lg:space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">My Budgets</h3>
                <button className="text-blue-500 hover:text-blue-600 transition-colors">
                  + Create Budget
                </button>
              </div>

              <BudgetCard budgets={budgets} />

              <div>
                <h3 className="text-xl font-semibold mb-4">Top Categories</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4">
                  <CategoryItem name="Travel" count={9} color="bg-green-100" />
                  <CategoryItem
                    name="Food and Drink"
                    count={9}
                    color="bg-blue-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
