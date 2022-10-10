import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ToastContainer } from "react-toastify";

const Main = () => {
  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} />
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;
