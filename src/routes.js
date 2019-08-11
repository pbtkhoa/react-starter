import { lazy } from "react";

const LoginPage = lazy(() => import("./containers/Auth/LoginContainer"));

const HomePage = lazy(() => import("./containers/HomeContainer"));

export default [
  {
    path: "/",
    exact: true,
    component: HomePage
  },
  {
    path: "/auth/login",
    exact: true,
    component: LoginPage
  }
];
