interface BudgetItem {
  category: string;
  spent: number;
  budget: number;
}

interface BudgetCardProps {
  budgets: BudgetItem[];
}

const BudgetCard: React.FC<BudgetCardProps> = ({ budgets }) => {
  const calculatePercentage = (spent: number, budget: number) => {
    return (spent / budget) * 100;
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
      <h3 className="text-xl font-semibold mb-4">Budget Overview</h3>
      <div className="space-y-4">
        {budgets.map((item, index) => {
          const percentage = calculatePercentage(item.spent, item.budget);
          return (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">
                  {item.category}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">
                    ${item.spent.toLocaleString()} / $
                    {item.budget.toLocaleString()}
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
