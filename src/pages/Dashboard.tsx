import { useNavigate } from "react-router-dom";
import BalanceCard from "../components/BalanceCard";
import BudgetCard from "../components/BudgetCard";
import CategoryItem from "../components/CategoryItem";
import Header from "../components/Header";
import TransactionTable from "../components/TransactionTable";
import { Budget } from "../types/budget";
import { Transaction } from "../types/transaction";

const Dashboard = () => {
  const navigate = useNavigate();

  const transactions: Transaction[] = [
    {
      id: "1",
      accountId: "default" as any,
      type: "INCOME",
      amount: 5000,
      note: "Salary Deposit",
      date: new Date(),
      categoryId: "salary" as any,
    },
    {
      id: "2",
      accountId: "default" as any,
      type: "EXPENSE",
      amount: 25.4,
      note: "Uber Ride",
      date: new Date(),
      categoryId: "transport" as any,
    },
  ];

  const accounts = [
    { name: "Main Account", balance: 5000, color: "#0088FE" },
    { name: "Savings", balance: 3000, color: "#00C49F" },
    { name: "Investment", balance: 2000, color: "#FFBB28" },
  ];

  const budgets: Budget[] = [
    {
      id: "1",
      name: "Shopping",
      amount: 1000,
      balance: 800,
      startDate: "2023-01-01",
      endDate: "2023-01-31",
    },
    {
      id: "2",
      name: "Food & Drinks",
      amount: 1000,
      balance: 950,
      startDate: "2023-01-01",
      endDate: "2023-01-31",
    },
    {
      id: "3",
      name: "Transportation",
      amount: 1000,
      balance: 1200,
      startDate: "2023-01-01",
      endDate: "2023-01-31",
    },
    {
      id: "4",
      name: "Housing",
      amount: 3000,
      balance: 2800,
      startDate: "2023-01-01",
      endDate: "2023-01-31",
    },
  ];

  return (
    <>
      <Header />
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
            <button
              onClick={() => navigate("/budgets/new")}
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
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
