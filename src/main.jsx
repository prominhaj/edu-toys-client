import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import AuthContext from "./AuthContext/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <PrimeReactProvider>
        <RouterProvider router={router} />
      </PrimeReactProvider>
    </AuthContext>
  </React.StrictMode>
);
