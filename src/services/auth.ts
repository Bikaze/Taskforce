import APIClient from "./api-client";
import { AuthResponse, LoginRequest, RegisterRequest } from "../lib/types";

class AuthService {
  private loginClient: APIClient<AuthResponse>;
  private registerClient: APIClient<AuthResponse>;

  constructor() {
    this.loginClient = new APIClient<AuthResponse>("/users/login");
    this.registerClient = new APIClient<AuthResponse>("/users");
  }

  login(data: LoginRequest) {
    console.log(data);
    return this.loginClient.post<LoginRequest>(data);
  }

  register(data: RegisterRequest) {
    return this.registerClient.post<RegisterRequest>(data);
  }

  logout() {
    localStorage.removeItem("token");
  }
}

export default new AuthService();
