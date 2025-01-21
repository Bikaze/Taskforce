import { createBrowserRouter, RouteObject } from "react-router-dom";
import Layout from "../layouts/Layout";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import Dashboard from "../pages/Dashboard";
import BanksPage from "../pages/BanksPage";
import BankDetailPage from "../pages/BankDetailPage";

const protectedRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "banks",
        element: <BanksPage />,
      },
      {
        path: "banks/:id",
        element: <BankDetailPage />,
      },
    ],
  },
];

const publicRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
];

export const router = createBrowserRouter([
  ...publicRoutes,
  ...protectedRoutes,
]);
