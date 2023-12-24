import { Button } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUserAsync } from "../Redux/UsserAuth/action";

const Navbar = () => {
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  const adminIsAuth = useSelector((store) => store.authReducer.adminIsAuth);
  console.log(adminIsAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUserAsync());
    navigate("/");
  };
  return (
    <div
      style={{
        border: "1px solid red",
        padding: "14px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "baseline",
      }}
    >
      <Link
        style={{ textDecoration: "none", color: "black", fontSize: "1.5rem" }}
        to="/"
      >
        Library Management System
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }} to="/book">
        Books
      </Link>
      {isAuth || adminIsAuth === true ? (
        <Button
          style={{ textDecoration: "none", color: "black" }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      ) : (
        <Link style={{ textDecoration: "none", color: "black" }} to="/signup">
          Login/Signup
        </Link>
      )}
      {/* <Link style={{ textDecoration: "none", color: "black" }} to="/signup">
        Login/Signup
      </Link> */}
    </div>
  );
};

export default Navbar;
