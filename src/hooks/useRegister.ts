import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { RegisterRequest } from "../lib/types";
import authService from "../services/auth";
import { toast } from "react-hot-toast";

export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (userData: RegisterRequest) => authService.register(userData),
    onSuccess: () => {
      toast.success("Account created successfully! Please login.");
      navigate("/login"); // Always redirect to login after registration
    },
    onError: (error: any) => {
      const message =
        error.response?.data?.error ||
        error.response?.data?.message ||
        "Registration failed";
      toast.error(message);
      throw new Error(message);
    },
  });
};
