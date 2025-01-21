import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import BalanceCard from "../components/BalanceCard";
import BankCard from "../components/BankCard";
import { Bank } from "../types/bank";

const BanksPage = () => {
  const navigate = useNavigate();
  const [banks] = useState<Bank[]>([
    {
      id: "1",
      name: "Main Account",
      accountType: "savings",
      accountNumber: "1234567890",
      balance: 5000,
      currency: "USD",
      logo: "/bank1.png",
    },
    // Add more mock data
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Banks</h1>
        <button
          onClick={() => navigate("/banks/new")}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Bank
        </button>
      </div>

      <BalanceCard
        accounts={banks.map((bank) => ({
          name: bank.name,
          balance: bank.balance,
          color: "#0088FE",
        }))}
        totalBalance={banks.reduce((sum, bank) => sum + bank.balance, 0)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {banks.map((bank) => (
          <BankCard
            key={bank.id}
            bank={bank}
            onClick={() => navigate(`/banks/${bank.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default BanksPage;
