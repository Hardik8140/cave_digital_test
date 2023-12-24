import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Login";
import Signup from "./Signup";
import Books from "./Books";
import Admin from "./Admin";
import AdminSignup from "./AdminSignup";
import AdminLogin from "./AdminLogin";
import PrivateRoutes from "./PrivateRoutes";
import AddBooks from "./AddBooks";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/book"
        element={
          <PrivateRoutes>
            <Books />
          </PrivateRoutes>
        }
      />
      <Route path="/admin" element={<Admin />} />
      <Route path="/adminSignup" element={<AdminSignup />} />
      <Route path="/adminLogin" element={<AdminLogin />} />
      <Route path="/addBook" element={<AddBooks />} />
    </Routes>
  );
};

export default AllRoutes;
