export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  photo?: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface ApiResponse {
  message: string;
  error?: string;
}

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface RegisterResponse extends ApiResponse {
  token: string;
  user: User;
}
