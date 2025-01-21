import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Bank } from "../types/bank";

const accountTypes = [
  { id: "savings", name: "Savings Account", logo: "/bank1.png" },
  { id: "checking", name: "Checking Account", logo: "/bank1.png" },
  { id: "mobile_money", name: "Mobile Money", logo: "/bank1.png" },
  {
    id: "investment",
    name: "Investment Account",
    logo: "/bank1.png",
  },
];

const BankDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bank, setBank] = useState<Bank | null>(null);

  useEffect(() => {
    // In a real app, fetch bank details from API
    // Mock data for now
    if (id !== "new") {
      setBank({
        id: "1",
        name: "Main Account",
        accountType: "savings",
        accountNumber: "1234567890",
        balance: 5000,
        currency: "USD",
        logo: "/banks/bank1.png",
      });
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    navigate("/banks");
  };

  return (
    <div className="p-4 lg:p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">
        {id === "new" ? "Add New Bank" : "Edit Bank"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {id !== "new" && (
          <div className="flex justify-center mb-8">
            <img src="/bank1.png" alt={bank?.name} className="w-32 h-32" />
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bank Name
            </label>
            <input
              type="text"
              defaultValue={bank?.name}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Account Type
            </label>
            <select
              defaultValue={bank?.accountType}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {accountTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Account Number / Identifier
            </label>
            <input
              type="text"
              defaultValue={bank?.accountNumber}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Currency
            </label>
            <input
              type="text"
              defaultValue={bank?.currency}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Balance
            </label>
            <input
              type="number"
              defaultValue={bank?.balance}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {id === "new" ? "Add Bank" : "Save Changes"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/banks")}
            className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default BankDetailPage;
