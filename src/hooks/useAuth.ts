import { useAuthStore } from "../stores/auth-store";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const { user, token, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return {
    user,
    token,
    isAuthenticated: !!token,
    logout: handleLogout,
  };
};
