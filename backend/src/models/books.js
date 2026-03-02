//import db from "../db/database.js";

export function getAllBooks() {
  return [
    {
      id: 1,
      title: "Book 1",
      author: "Author 1",
      date: "2022-01-01",
      genre: "fiction",
      grad: "grad-1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      id: 2,
      title: "Book 2",
      author: "Author 2",
      date: "2023-01-01",
      genre: "science",
      grad: "grad-2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      id: 3,
      title: "Book 3",
      author: "Author 3",
      date: "2024-05-12",
      genre: "history",
      grad: "grad-3",
      content: "Exploring the depths of historical events.",
    },
  ];
}

export function createBook(title, author, date, genre, content) {
  const newBook = {
    id: Date.now(),
    title,
    author,
    date,
    genre,
    content,
  };
  return newBook;
}
