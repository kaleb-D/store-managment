import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";

import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

import { useAuthStore } from "./store/useAuthStore.js";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import { Toaster } from "react-hot-toast";
import { useThemeStore } from "./store/useThemeStore.js";
import DashboardPage from "./pages/DashboardPage.jsx";

const App = () => {
  const { checkAuth } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const { authUser, isCheckingAuth } = useAuthStore();

  const { theme } = useThemeStore();

  console.log({ authUser });

  if (isCheckingAuth && !authUser) {
    return (
      <div
        data-theme={theme}
        className="flex items-center justify-center h-screen"
      >
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

  return (
    <div
      data-theme="aqua"
      className="relative h-screen bg-[url(/bg.jpg)] bg-cover bg-center bg-fixed"
    >
      <div className="absolute inset-0 bg-gradient-to-tl z-0 from-black/60 to-black/30"></div>
      <div className="z-10 relative">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={authUser ? <DashboardPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/signup"
            element={!authUser ? <SignUpPage /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!authUser ? <LoginPage /> : <Navigate to="/" />}
          />

          <Route path="/logout" element={<Navigate to="/signup" />} />
        </Routes>
      </div>
      <Toaster />
    </div>
  );
};

export default App;
