import React from "react";

import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Transactions from "../pages/Transactions";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root />,
    errorElement:<ErrorPage />,
    children: [
      {
        path: "/",
        element:<Home />,
      },
      {
        path: "/profile",
        element:<Profile />,
      },
      {
        path: "/login",
        element:<Login />,
      },
      {
        path:"/transactions",
        element:<Transactions />,
      },
    ]
  }
])

export default router;
