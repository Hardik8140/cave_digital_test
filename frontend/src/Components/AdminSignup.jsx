import React, { useState } from "react";
import { signUpAdmin } from "../Redux/UsserAuth/action";
import { Box, Center, Heading, Input } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const AdminSignup = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    number: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !userData.username ||
      !userData.name ||
      !userData.email ||
      !userData.password ||
      !userData.number
    ) {
      alert("All fields are required!");
      return;
    }
    dispatch(signUpAdmin(userData)).then(() => {
      navigate("/admin");
    });
  };
  return (
    <Center>
      <Box w="50%">
        <form onSubmit={handleSubmit}>
          <Input
            mt="5"
            required
            type="text"
            placeholder="Username"
            name="username"
            value={userData.username}
            onChange={handleChange}
          />
          <Input
            mt="5"
            required
            type="text"
            placeholder="Full Name"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
          <Input
            mt="5"
            required
            type="email"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          <Input
            mt="5"
            required
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          <Input
            mt="5"
            required
            type="number"
            placeholder="Phone Number"
            name="number"
            value={userData.number}
            onChange={handleChange}
          />
          <Input
            type="submit"
            value="Signup"
            mt="5"
            _hover={{
              fontWeight: "bold",
              border: "1px solid black",
              backgroundColor: "gray",
              color: "white",
              textDecoration: "underline",
            }}
          />
        </form>

        <Heading as="h4" size="sm">
          if you register
          <Link to="/adminLogin" style={{ color: "blue" }}>
            Please Login
          </Link>
        </Heading>
      </Box>
    </Center>
  );
};

export default AdminSignup;
