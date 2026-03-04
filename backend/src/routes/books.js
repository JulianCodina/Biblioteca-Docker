import express from "express";
import { getAllBooks, createBook, deleteBook } from "../models/books.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const books = await getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, author, cover, genre, content } = req.body;

    if (!title || !author || !cover || !genre || !content) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields",
      });
    }

    await createBook(title, author, genre, cover, content);

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

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteBook(id);
    if (!result) {
      return res
        .status(404)
        .json({ success: false, message: "Book not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
