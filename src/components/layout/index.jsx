import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
