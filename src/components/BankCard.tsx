import { Bank } from "../types/bank";

interface BankCardProps {
  bank: Bank;
  onClick: () => void;
}

const BankCard: React.FC<BankCardProps> = ({ bank, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white cursor-pointer transform transition-all hover:scale-105 hover:shadow-lg"
    >
      <div className="flex items-start justify-between mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">{bank.name}</h3>
          <div className="text-2xl font-bold">
            {bank.currency} {bank.balance.toLocaleString()}
          </div>
        </div>
        <img src={bank.logo} alt={bank.name} className="w-12 h-12" />
      </div>

      <div className="flex justify-between items-center">
        <div className="text-sm opacity-80">
          **** **** **** {bank.accountNumber.slice(-4)}
        </div>
        <div className="text-sm opacity-80">{bank.accountType}</div>
      </div>
    </div>
  );
};

export default BankCard;
