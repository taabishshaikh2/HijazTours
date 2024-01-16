import React from "react";
import Header from "../components/Header";
import { Link, Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer";


const Layout = () => {
  return (
    <div className="">
      <Header />
      <Outlet />
      <Footer />
      
      <ScrollRestoration />
    </div>
  );
};

export default Layout;
