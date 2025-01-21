import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

interface Account {
  name: string;
  balance: number;
  color: string;
}

interface BalanceCardProps {
  accounts: Account[];
  totalBalance: number;
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const BalanceCard: React.FC<BalanceCardProps> = ({
  accounts,
  totalBalance,
}) => {
  const data = accounts.map((account) => ({
    name: account.name,
    value: account.balance,
    color: account.color,
  }));

  const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: any[] }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-100">
          <p className="font-semibold">{payload[0].name}</p>
          <p className="text-blue-600">${payload[0].value.toLocaleString()}</p>
          <p className="text-gray-500 text-sm">
            {((payload[0].value / totalBalance) * 100).toFixed(1)}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
      <div className="flex items-center gap-8">
        <div className="relative w-48 h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color || COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <div className="text-sm text-gray-500">Total Balance</div>
            <div className="text-2xl font-bold">
              ${totalBalance.toLocaleString()}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">
            {accounts.length} Bank Accounts
          </h3>
          <div className="space-y-2">
            {accounts.map((account, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor:
                        account.color || COLORS[index % COLORS.length],
                    }}
                  />
                  <span className="text-gray-600">{account.name}</span>
                </div>
                <span className="font-medium">
                  ${account.balance.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
