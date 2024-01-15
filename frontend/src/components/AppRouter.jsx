import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login.jsx";
import Main from "../pages/Main.jsx";
import Registration from "../pages/Registration.jsx";
import GitCallback from "../pages/GitCallback.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/git-callback" element={<GitCallback />}></Route>
    </Routes>
  );
};

export default AppRouter;
