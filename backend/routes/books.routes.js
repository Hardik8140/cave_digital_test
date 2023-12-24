const express = require("express");
const { BooksModel } = require("../model/books.model");

const booksRoutes = express.Router();

booksRoutes.post("/add", async (req, res) => {
  const payload = req.body;

  try {
    const book = new BooksModel(payload);
    await book.save();
    res.status(200).json({ msg: "New Books Added Successful!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

booksRoutes.get("/", async (req, res) => {
  try {
    const book = await BooksModel.find();
    res.status(200).json({ book });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

booksRoutes.patch("/update/:id", async (req, res) => {
  try {
    const bookId = req.params.id;
    const { name, author, status } = req.body;
    const book = await BooksModel.findById(bookId);

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    await book.save();

    res.status(200).json({ book });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

booksRoutes.delete("/delete/:id", async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await BooksModel.findByIdAndDelete(bookId);

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.status(200).json({ msg: "Book deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = { booksRoutes };
