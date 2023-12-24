import { Box, Input, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../Redux/Books/action";
import { useNavigate } from "react-router-dom";

const AddBooks = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookData = { name, author, status };
    dispatch(addBook(bookData)).then(() => {
      navigate("/admin");
    });
  };
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Enter Book name"
          value={name}
          onChange={handleNameChange}
        />
        <Input
          type="text"
          placeholder="Enter Author name"
          value={author}
          onChange={handleAuthorChange}
        />
        <Select value={status} onChange={handleStatusChange}>
          <option value="">Select Status</option>
          <option value="true">Available</option>
          <option value="false">Not Available</option>
        </Select>
        <Input type="submit" value="Submit" />
      </form>
    </Box>
  );
};

export default AddBooks;
