import { Budget } from "../types/budget";

interface BudgetCardProps {
  budgets: Budget[];
}

const BudgetCard: React.FC<BudgetCardProps> = ({ budgets }) => {
  const calculatePercentage = (balance: number, amount: number) => {
    return (balance / amount) * 100;
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 100) return "bg-red-500";
    if (percentage >= 80) return "bg-yellow-500";
    return "bg-green-500";
  };

  const getTextColor = (percentage: number) => {
    if (percentage >= 100) return "text-red-600";
    if (percentage >= 80) return "text-yellow-600";
    return "text-green-600";
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="space-y-4">
        {budgets.map((budget, index) => {
          const percentage = calculatePercentage(budget.balance, budget.amount);
          return (
            <div key={budget.id || index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">
                  {budget.name}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">
                    {budget.balance.toLocaleString()} /{" "}
                    {budget.amount.toLocaleString()} RWF
                  </span>
                  <span
                    className={`text-sm font-medium ${getTextColor(
                      percentage
                    )}`}
                  >
                    {percentage.toFixed(0)}%
                  </span>
                </div>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full ${getProgressColor(
                    percentage
                  )} transition-all duration-300`}
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BudgetCard;
