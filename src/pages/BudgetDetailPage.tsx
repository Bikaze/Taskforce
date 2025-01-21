import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Budget } from "../types/budget";

const BudgetDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [budget, setBudget] = useState<Budget | null>(null);

  useEffect(() => {
    if (id !== "new") {
      setBudget({
        id: "1",
        name: "Monthly Expenses",
        amount: 1000000,
        balance: 800000,
        startDate: "2024-03-01",
        endDate: "2024-03-31",
      });
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/budgets");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">
        {id === "new" ? "Create Budget" : "Edit Budget"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Budget Name
            </label>
            <input
              type="text"
              defaultValue={budget?.name}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount
            </label>
            <input
              type="number"
              defaultValue={budget?.amount}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {id !== "new" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Balance
              </label>
              <input
                type="number"
                defaultValue={budget?.balance}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Currency
            </label>
            <input
              type="text"
              value="RWF"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
              disabled
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <input
                type="date"
                defaultValue={budget?.startDate}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Date
              </label>
              <input
                type="date"
                defaultValue={budget?.endDate}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {id === "new" ? "Create Budget" : "Save Changes"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/budgets")}
            className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default BudgetDetailPage;
