interface HeaderProps {
  user: string;
}

const Header = ({ user }: HeaderProps) => (
  <div className="mb-8">
    <h2 className="text-2xl font-semibold">
      Welcome <span className="text-blue-500">{user}</span>
    </h2>
    <p className="text-gray-500">
      Access & manage your account and transactions efficiently.
    </p>
  </div>
);

export default Header;
