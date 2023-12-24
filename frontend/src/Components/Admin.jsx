import {
  Box,
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteBook, fetchData } from "../Redux/Books/action";

const Admin = () => {
  const navigate = useNavigate();
  const handleAddBooks = () => {
    navigate("/addBook");
  };
  const book = useSelector((store) => store.bookReducer.books);
  console.log(book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteBook(id)).then(() => {
      dispatch(fetchData());
    });
  };

  return (
    <Box>
      <Box>
        <Button onClick={handleAddBooks}>Add Books</Button>
      </Box>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Book name</Th>
              <Th>Author name</Th>
              <Th>Status</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {book &&
              book.map((book) => (
                <Tr key={book._id}>
                  <Td>{book.name}</Td>
                  <Td>{book.author}</Td>
                  <Td>
                    {book.status === false ? "Not Available" : "Available"}
                  </Td>
                  <Td>
                    <Button
                      colorScheme="red"
                      size="sm"
                      onClick={() => handleDelete(book._id)}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Admin;
