import express from "express";
import { getAllBooks, createBook } from "../models/books.js";

const router = express.Router();

router.get("/", (req, res) => {
  const books = getAllBooks();
  res.status(200).json(books);
});

router.post("/", (req, res) => {
  try {
    const { title, author, date, genre, content } = req.body;

    if (!title || !author || !date || !genre || !content) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields",
      });
    }

    res.status(201).json({
      success: true,
      message: "Book created successfully",
    });
  } catch (error) {
    console.error("Error in POST /books:", error);
    res.status(500).json({
      success: false,
      error: error.message || "Failed to create book",
      details: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });
  }
});

export default router;
