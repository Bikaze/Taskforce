import React from 'react';

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  active: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, active }) => (
  <div
    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
      active ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-100"
    }`}
  >
    {icon}
    <span>{text}</span>
  </div>
);

export default SidebarItem;
