import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../components/layout/index.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import MainPage from "./pages/MainPage.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
