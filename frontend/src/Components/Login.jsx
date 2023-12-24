import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAdmin, loginUser } from "../Redux/UsserAuth/action";
import { Box, Center, Input } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(loginUser(userData)).then(() => {
      navigate(location.state, { replace: true });
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

export default Login;
