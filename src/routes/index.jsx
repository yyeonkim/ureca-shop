import Layout from "@/components/layout/index.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import AboutPage from "./pages/AboutPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import MainPage from "./pages/MainPage.jsx";
import MainSub1Page from "./pages/MainSub1Page.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ShopPage from "./pages/ShopPage.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
        children: [
          {
            path: "/sub1",
            element: <MainSub1Page />,
          },
          {
            path: "/sub2",
            element: <MainSub1Page />,
          },
        ],
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
  { path: "*", element: <NotFoundPage /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
