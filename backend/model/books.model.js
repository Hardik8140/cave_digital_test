const mongoose = require("mongoose");

const booksSchema = mongoose.Schema(
  {
    name: String,
    author: String,
    status: Boolean,
  },
  {
    versionKey: false,
  }
);

const BooksModel = mongoose.model("book", booksSchema);

module.exports = { BooksModel };
