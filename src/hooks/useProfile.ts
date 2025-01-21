import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { User } from "../lib/types";

const apiClient = new APIClient<User>("/users/me");

export const useProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: () => apiClient.get(""),
    retry: false,
  });
};
