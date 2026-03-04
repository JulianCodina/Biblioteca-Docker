import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  date: { type: String, default: () => new Date().getFullYear().toString() },
  genre: String,
  cover: String,
  content: String,
});

export const Book = mongoose.model("Book", bookSchema);

export async function getAllBooks() {
  console.log("Obteniendo todos los libros");
  return await Book.find();
}

export async function createBook(title, author, genre, cover, content) {
  const newBook = new Book({
    title,
    author,
    date: new Date().getFullYear(),
    genre,
    cover,
    content,
  });
  console.log("Libro creado:", newBook);
  return await newBook.save();
}

export async function deleteBook(id) {
  console.log("Borrando libro:", id);
  return await Book.findByIdAndDelete(id);
}
