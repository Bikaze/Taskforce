import { Link } from "react-router-dom";
import {
  FaWallet,
  FaMoneyBillWave,
  FaChartLine,
  FaRegListAlt,
  FaRegSmile,
} from "react-icons/fa";

const HomePage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <nav className="bg-white shadow-md py-4 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0">
              <img
                className="h-20 w-auto"
                src="/logo.png"
                alt="Majestic Wallet"
              />
            </div>
            <div className="hidden md:flex items-center">
              <Link
                to="/register"
                className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full text-center space-y-8">
          <h1 className="text-5xl font-bold text-gray-900">
            Welcome to Majestic Wallet{" "}
            <FaRegSmile className="inline-block text-yellow-500" />
          </h1>
          <p className="text-xl text-gray-600">
            Majestic Wallet is your trusted partner in financial management. We
            help you keep track of your accounts, transactions, budgets, and
            more. With Majestic Wallet, you can:
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaWallet className="text-indigo-600 text-3xl mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Manage Accounts
            </h2>
            <p className="text-gray-600">
              Manage multiple account types including bank accounts, mobile
              money, and cash.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaMoneyBillWave className="text-green-600 text-3xl mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Track Transactions
            </h2>
            <p className="text-gray-600">
              Track your income and expenses with detailed transaction records.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaRegListAlt className="text-blue-600 text-3xl mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Set Budgets
            </h2>
            <p className="text-gray-600">
              Set and monitor budgets to control your spending.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaChartLine className="text-red-600 text-3xl mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Categorize Transactions
            </h2>
            <p className="text-gray-600">
              Categorize your transactions for better insights.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaRegSmile className="text-yellow-600 text-3xl mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Generate Reports
            </h2>
            <p className="text-gray-600">
              Generate dynamic reports and visualizations to understand your
              financial health.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/register"
            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700"
          >
            Get Started
          </Link>
        </div>
      </main>
      <footer className="bg-white shadow-md mt-12 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">
            © {currentYear} Majestic Wallet. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
