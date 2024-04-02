import React from "react";
import { Routes, Route } from "react-router-dom";
import LogsPage from "../pages/logsPage/logs";
import HomePage from "../pages/homePage/homePage";
import Verify from "../components/verify/verify";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LogsPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/verify" element={<Verify />} />
    </Routes>
  );
};

export default MyRoutes;
