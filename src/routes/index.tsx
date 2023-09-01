import { Route, Routes, Navigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";
import { Announcement } from "../pages/Announcement";
import { ProtectedRoutes } from "../components/ProtectedRoutes";

export const RoutesMain = () => (
  <Routes>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/register" element={<Register />}></Route>
    <Route path="/home" element={<Home />}></Route>
    <Route element={<ProtectedRoutes />}>
      <Route path="/announcement/:id" element={<Announcement />}></Route>
    </Route>
    <Route path="*" element={<Navigate to="/home" />}></Route>
  </Routes>
);
