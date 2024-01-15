/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../Pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import { ChakraProvider } from "@chakra-ui/react";

const Main = () => {
  return (
    <>
      <ChakraProvider>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </ChakraProvider>
    </>
  );
};

export default Main;
