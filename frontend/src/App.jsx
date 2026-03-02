import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [activeFilter, setActiveFilter] = useState("All Books");
  const [books, setBooks] = useState([]);

  const filters = ["All Books", "fiction", "science", "biography", "history"];

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/books`);
        setBooks(response.data);
        console.log("Books: ", response.data);
      } catch (error) {
        console.error("Error al obtener los books:", error);
        setBooks(
          Array.from({ length: 10 }, (_, i) => ({
            id: i + 1,
            title: `Book ${i + 1} (Prueba)`,
            author: `Author ${i + 1}`,
            date: "01/01/2022",
            genre: "fiction",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
          })),
        );
        alert("Sin conexión con el backend");
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo-section">
          <span className="logo-text">Biblioteca</span>
        </div>

        <button className="btn-add">+ Add Book</button>
      </nav>

      <section className="collection-section">
        <div className="filter-bar">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className="book-grid">
          {books
            .filter((book) =>
              activeFilter === "All Books" ? true : book.genre === activeFilter,
            )
            .map((book, index) => (
              <div key={book.id} className="book-card">
                <div className={`book-cover grad-${index % 10}`}></div>
                <div className="book-info">
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                  <p>{book.date}</p>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}

export default App;
