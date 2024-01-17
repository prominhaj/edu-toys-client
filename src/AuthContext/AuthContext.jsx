/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const userContext = createContext(null);

const auth = getAuth(app);

const AuthContext = ({ children }) => {
  // loading
  const [loading, setLoading] = useState(false);

  // Create Account
  const createAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Update Profile
  const addProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const userInfo = {
    createAccount,
    addProfile,
    loading,
    setLoading
  };

  return (
    <userContext.Provider value={userInfo}>{children}</userContext.Provider>
  );
};

export default AuthContext;
