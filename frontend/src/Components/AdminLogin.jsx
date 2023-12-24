import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../Redux/UsserAuth/action";
import { Box, Center, Input } from "@chakra-ui/react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const adminIsAuth = useSelector((store) => store.authReducer.adminIsAuth);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(loginAdmin(userData)).then(() => {
      // if (adminIsAuth === true) {
      navigate("/admin");
      // }
    });
  };
  return (
    <Center>
      <Box w="50%">
        <form onSubmit={handleSubmit}>
          <Input
            mt={5}
            type="email"
            placeholder="Enter Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            mt={5}
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input mt={5} type="submit" value="Login" />
        </form>
      </Box>
    </Center>
  );
};

export default AdminLogin;
