import {
  Banknote,
  CreditCard,
  History,
  Home,
  Send,
  LogOut,
} from "lucide-react";
import SidebarItem from "./SidebarItem";

const Sidebar = () => (
  <div className="w-64 bg-white p-6 flex flex-col gap-4">
    <div className="mb-8 flex justify-center">
      <img src="/logo.png" alt="App Logo" className="h-16 w-auto max-w-full" />
    </div>

    <nav className="flex flex-col gap-2">
      <SidebarItem icon={<Home />} text="Home" active />
      <SidebarItem icon={<CreditCard />} text="My Banks" active={false} />
      <SidebarItem icon={<History />} text="Transaction History" active={false} />
      <SidebarItem icon={<Send />} text="Record Transaction" active={false} />
      <SidebarItem icon={<Banknote />} text="My Budgets" active={false} />
      <SidebarItem icon={<LogOut />} text="Logout" active={false} />
    </nav>
  </div>
);

export default Sidebar;
