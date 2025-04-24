const express = require("express");
const Book = require("../models/books");

const routes = express.Router(); //middleware

//Get all the books
routes.get("/books", async (req, res) => {
  console.log(req);
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: error.message });
  }
});

// create a book
routes.post("/books", async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//Update a book by id
routes.put("/books/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!book) {
      return res.status(404).json({ error: "Book not found!" });
    }
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ error: error.message });
  }
});

//delete a book by id
routes.delete("/books/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Book not found!" });
    }
    res.status(201).json({ message: "book deleted!" });
  } catch (err) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = routes;
