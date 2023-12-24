import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/Books/action";

const Books = () => {
  const dispatch = useDispatch();
  const book = useSelector((store) => store.bookReducer.books);
  console.log(book);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Box p="2rem">
      {book.map((el) => (
        <Box key={el._id} boxShadow="lg" p="2rem" w="40%" borderRadius="10px">
          <Heading as="h2" size="md">
            Book Name: {el.name}
          </Heading>
          <Text>Author: {el.author}</Text>
          <Text>
            Status: {el.status === false ? "Not Available" : "Available"}
          </Text>
          {el.status === false ? null : <Button>Borrow</Button>}
        </Box>
      ))}
    </Box>
  );
};

export default Books;
