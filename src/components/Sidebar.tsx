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

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen }) => (
  <div
    className={`
      fixed lg:static inset-y-0 left-0 z-30
      transform lg:transform-none transition-transform duration-200
      ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      w-64 bg-white flex flex-col h-screen shadow-lg
    `}
  >
    <div className="p-6">
      <div className="mb-8 flex justify-center">
        <img
          src="/logo.png"
          alt="App Logo"
          className="h-16 w-auto max-w-full"
        />
      </div>

      <nav className="flex flex-col gap-2">
        <SidebarItem icon={<Home />} text="Home" active />
        <SidebarItem icon={<CreditCard />} text="My Banks" active={false} />
        <SidebarItem
          icon={<History />}
          text="Transaction History"
          active={false}
        />
        <SidebarItem icon={<Send />} text="Record Transaction" active={false} />
        <SidebarItem icon={<Banknote />} text="My Budgets" active={false} />
      </nav>
    </div>

    <div className="mt-auto p-6">
      <SidebarItem icon={<LogOut />} text="Logout" active={false} />
    </div>
  </div>
);

export default Sidebar;
