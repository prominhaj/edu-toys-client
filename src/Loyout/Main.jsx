/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../Pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Toaster } from "react-hot-toast";

const Main = () => {
  return (
    <>
      <ChakraProvider>
        <Header></Header>
        <Outlet></Outlet>
        <Toaster
          toastOptions={{
            success: {
              style: {
                color: 'white',
                background: "green",
              },
            },
            error: {
              style: {
                color: 'white',
                background: "gray",
              },
            },
          }}
        />
      </ChakraProvider>
    </>
  );
};

export default Main;
