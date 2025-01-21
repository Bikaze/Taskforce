import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { LoginRequest } from "../lib/types";
import authService from "../services/auth";
import { useAuthStore } from "../stores/auth-store";

export const useLogin = () => {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: (credentials: LoginRequest) => authService.login(credentials),
    onSuccess: (data) => {
      setAuth(data.user, data.token);
      navigate("/dashboard");
    },
    onError: (error: any) => {
      throw new Error(error.response?.data?.message || "Login failed");
    },
  });
};
