import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Account {
  id: string;
  name: string;
  balance: number;
  accountNumber: string;
}

const RecordTransactionPage = () => {
  const navigate = useNavigate();

  // Mock accounts data
  const mockAccounts: Account[] = [
    {
      id: "1",
      name: "Main Account",
      balance: 1500000,
      accountNumber: "****1234",
    },
    { id: "2", name: "Savings", balance: 500000, accountNumber: "****5678" },
    {
      id: "3",
      name: "Investment",
      balance: 2000000,
      accountNumber: "****9012",
    },
  ];

  const [formData, setFormData] = useState({
    type: "EXPENSE",
    accountId: "",
    amount: "",
    note: "",
    categoryId: "",
    budgetId: "",
    date: new Date().toISOString().split("T")[0],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Transaction recorded:", formData);
    navigate("/transactions");
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-8">
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-2xl font-bold">Record Transaction</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Account Selection */}
          <div className="md:col-span-2 space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Select Account
            </label>
            <select
              value={formData.accountId}
              onChange={(e) =>
                setFormData({ ...formData, accountId: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Choose an account</option>
              {mockAccounts.map((account) => (
                <option key={account.id} value={account.id}>
                  {account.name} ({account.accountNumber}) - Balance:{" "}
                  {account.balance.toLocaleString()} RWF
                </option>
              ))}
            </select>
          </div>

          {/* Transaction Type */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Transaction Type
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, type: "INCOME" })}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  formData.type === "INCOME"
                    ? "bg-green-100 text-green-700 border-2 border-green-500"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                INCOME
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, type: "EXPENSE" })}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  formData.type === "EXPENSE"
                    ? "bg-red-100 text-red-700 border-2 border-red-500"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                EXPENSE
              </button>
            </div>
          </div>

          {/* Amount */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Amount (RWF)
            </label>
            <input
              type="number"
              min="1"
              value={formData.amount}
              onChange={(e) =>
                setFormData({ ...formData, amount: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              value={formData.categoryId}
              onChange={(e) =>
                setFormData({ ...formData, categoryId: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Category</option>
              {formData.type === "INCOME" ? (
                <>
                  <option value="salary">Salary</option>
                  <option value="investment">Investment Returns</option>
                  <option value="other">Other Income</option>
                </>
              ) : (
                <>
                  <option value="food">Food & Drinks</option>
                  <option value="transport">Transport</option>
                  <option value="shopping">Shopping</option>
                  <option value="bills">Bills & Utilities</option>
                </>
              )}
            </select>
          </div>

          {/* Budget Link */}
          {formData.type === "EXPENSE" && (
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Link to Budget (Optional)
              </label>
              <select
                value={formData.budgetId}
                onChange={(e) =>
                  setFormData({ ...formData, budgetId: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Budget</option>
                <option value="budget1">Monthly Budget</option>
                <option value="budget2">Travel Budget</option>
              </select>
            </div>
          )}

          {/* Date */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Note */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Note
          </label>
          <textarea
            value={formData.note}
            onChange={(e) => setFormData({ ...formData, note: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            rows={3}
            required
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Save Transaction
          </button>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecordTransactionPage;
