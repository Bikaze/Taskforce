import BalanceCard from "../components/BalanceCard";
import BudgetCard from "../components/BudgetCard";
import CategoryItem from "../components/CategoryItem";
import Header from "../components/Header";
import TransactionTable from "../components/TransactionTable";

const Dashboard = () => {
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
    <>
      <Header user="Adrian" />
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-8">
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
    </>
  );
};

export default Dashboard;
