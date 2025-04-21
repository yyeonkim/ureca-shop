import { getCart } from "@/api/cart.js";
import { getProduct, getProducts } from "@/api/products.js";
import Layout from "@/components/layout/index.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import AboutPage from "./pages/AboutPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import MainPage from "./pages/MainPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
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
        loader: async () => {
          const products = await getProducts({ params: { _limit: 6 } });
          return { products };
        },
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
        loader: async () => {
          const cart = await getCart();
          const products = await Promise.all(cart.map((item) => getProduct(item.id)));
          return { products, cart };
        },
        hydrateFallbackElement: <p>Loading...</p>, // TODO: 스켈레톤 넣기기
      },
      {
        path: "/products/:id",
        loader: async ({ params }) => {
          const product = await getProduct(params.id);
          return { product };
        },
        hydrateFallbackElement: <p>Loading...</p>, // TODO: 스켈레톤 넣기기
        element: <ProductPage />,
      },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
