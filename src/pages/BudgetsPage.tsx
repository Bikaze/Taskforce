import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import { Budget } from "../types/budget";
import BudgetCard from "../components/BudgetCard";

const BudgetsPage = () => {
  const navigate = useNavigate();
  const [budgets] = useState<Budget[]>([
    {
      id: "1",
      name: "Monthly Expenses",
      amount: 1000000,
      balance: 800000,
      startDate: "2024-03-01",
      endDate: "2024-03-31",
    },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Budgets</h1>
        <button
          onClick={() => navigate("/budgets/new")}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-5 h-5" />
          Create Budget
        </button>
      </div>

      <BudgetCard budgets={budgets} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {budgets.map((budget) => (
          <div
            key={budget.id}
            onClick={() => navigate(`/budgets/${budget.id}`)}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <h3 className="text-lg font-semibold mb-4">{budget.name}</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>
                    {Math.round((budget.balance / budget.amount) * 100)}%
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      budget.balance / budget.amount >= 1
                        ? "bg-red-500"
                        : budget.balance / budget.amount >= 0.8
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    }`}
                    style={{
                      width: `${Math.min(
                        (budget.balance / budget.amount) * 100,
                        100
                      )}%`,
                    }}
                  />
                </div>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Balance</span>
                <span className="font-medium">
                  {budget.balance.toLocaleString()} RWF
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Amount</span>
                <span className="font-medium">
                  {budget.amount.toLocaleString()} RWF
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetsPage;
