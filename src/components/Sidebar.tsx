import { useNavigate, useLocation } from "react-router-dom";
import {
  Banknote,
  CreditCard,
  History,
  Home,
  Send,
  LogOut,
} from "lucide-react";
import SidebarItem from "./SidebarItem";

interface SidebarProps {
  isSidebarOpen?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-30
        transform lg:translate-x-0 transition-transform duration-200
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        w-64 bg-white shadow-lg flex flex-col
        overflow-y-auto
      `}
    >
      <div className="sticky top-0 bg-white p-6">
        <div className="mb-8 flex justify-center">
          <img
            src="/logo.png"
            alt="App Logo"
            className="h-16 w-auto max-w-full"
          />
        </div>

        <nav className="flex flex-col gap-2">
          <SidebarItem
            icon={<Home />}
            text="Home"
            active={isActive("/dashboard")}
            onClick={() => handleNavigation("/dashboard")}
          />
          <SidebarItem
            icon={<CreditCard />}
            text="My Banks"
            active={isActive("/banks")}
            onClick={() => handleNavigation("/banks")}
          />
          <SidebarItem
            icon={<History />}
            text="Transaction History"
            active={isActive("/transactions")}
            onClick={() => handleNavigation("/transactions")}
          />
          <SidebarItem
            icon={<Send />}
            text="Record Transaction"
            active={isActive("/record")}
            onClick={() => handleNavigation("/record")}
          />
          <SidebarItem
            icon={<Banknote />}
            text="My Budgets"
            active={isActive("/budgets")}
            onClick={() => handleNavigation("/budgets")}
          />
        </nav>
      </div>

      <div className="mt-auto p-6">
        <SidebarItem
          icon={<LogOut />}
          text="Logout"
          active={false}
          onClick={() => handleNavigation("/login")}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
