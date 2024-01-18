/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
import toast from "react-hot-toast";

export const userContext = createContext(null);

const auth = getAuth(app);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);

  // Toast
  const success = (success) => toast.success(success);
  const error = (error) => toast.error(error);

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

  // Login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Auth
  const googleProvider = new GoogleAuthProvider();
  const googleAuth = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Github Auth
  const githubProvider = new GithubAuthProvider();
  const githubAuth = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // Log Out
  const logOut = () => {
    return signOut(auth);
  };

  // Auth State Changed
  useEffect(() => {
    const disConnect = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);

      if (currentUser && currentUser.email) {
        const loggedUser = {
          email: currentUser.email,
        };
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loggedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("toy-access-token", data.token);
          });
      } else {
        localStorage.removeItem("toy-access-token");
      }
    });

    return () => disConnect();
  }, []);

  const userInfo = {
    createAccount,
    addProfile,
    login,
    logOut,
    googleAuth,
    githubAuth,
    success,
    error,
    setLoading,
    loading,
    authLoading,
    user,
  };

  return (
    <userContext.Provider value={userInfo}>{children}</userContext.Provider>
  );
};

export default AuthContext;
