import { useProfile } from "../hooks/useProfile";

const Header = () => {
  const { data: profile, isLoading } = useProfile();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold">
        Welcome <span className="text-blue-500">{profile?.firstName}</span>
      </h2>
      <p className="text-gray-500">
        Access & manage your account and transactions efficiently.
      </p>
    </div>
  );
};

export default Header;
