import db from "../db/data.js";

export function getAllBooks() {
  return db;
}

export function createBook(title, author, genre, cover, content) {
  const newBook = {
    id: Date.now(),
    title,
    author,
    date: new Date().getFullYear(),
    genre,
    cover,
    content,
  };
  db.push(newBook);
}
