import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Transaction } from "../types/transaction";

const TransactionDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState<Transaction | null>(null);

  useEffect(() => {
    // Mock fetch transaction
    setTransaction({
      id: id!,
      accountId: "acc1" as any,
      type: "EXPENSE",
      amount: 25000,
      note: "Grocery Shopping",
      date: new Date(),
      categoryId: "Food & Drinks",
    });
  }, [id]);

  if (!transaction) return null;

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-8">
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-2xl font-bold">Transaction Details</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-semibold">{transaction.note}</h2>
              <p className="text-gray-500 mt-1">
                {new Date(transaction.date).toLocaleDateString()}
              </p>
            </div>
            <div
              className={`text-lg font-semibold ${
                transaction.type === "EXPENSE"
                  ? "text-red-600"
                  : "text-green-600"
              }`}
            >
              {transaction.amount.toLocaleString()} RWF
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-500">Transaction Type</p>
              <p className="mt-1 font-medium">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    transaction.type === "EXPENSE"
                      ? "bg-red-100 text-red-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {transaction.type}
                </span>
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Category</p>
              <p className="mt-1 font-medium">
                <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                  {transaction.categoryId || "Uncategorized"}
                </span>
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Account</p>
              <p className="mt-1 font-medium">Main Account</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Date & Time</p>
              <p className="mt-1 font-medium">
                {new Date(transaction.date).toLocaleString()}
              </p>
            </div>
          </div>

          {transaction.note && (
            <div>
              <p className="text-sm text-gray-500">Note</p>
              <p className="mt-1">{transaction.note}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionDetailPage;
