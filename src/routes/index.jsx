import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../components/layout/index.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import MainPage from "./pages/MainPage.jsx";
import ShopPage from "./pages/ShopPage.jsx";

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
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
