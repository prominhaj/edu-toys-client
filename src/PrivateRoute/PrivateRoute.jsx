/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { userContext } from "../AuthContext/AuthContext";
import { Spinner } from "@chakra-ui/react";

const PrivateRoute = ({ children }) => {
  const { user, authLoading } = useContext(userContext);
  const location = useLocation();

  if (authLoading) {
    return (
      <div className="text-center mt-4">
        <Spinner color="red.500" />
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{from: location}} replace />;
};

export default PrivateRoute;
