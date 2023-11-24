import React from "react";
import { Routes, Switch, Route } from "react-router-dom";
import Login from "../pages/Login.jsx";
import Main from "../pages/Main.jsx";
import Registration from "../pages/Registration.jsx";
import CodeRedirect from "../pages/CodeRedirect.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/redirect" element={<CodeRedirect />}></Route>
    </Routes>
  );
};

export default AppRouter;
