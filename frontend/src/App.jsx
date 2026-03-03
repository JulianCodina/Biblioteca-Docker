import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import ReadModal from "./ReadModal";

function App() {
  const [activeFilter, setActiveFilter] = useState("All Books");
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const filters = ["All Books", "ficción", "ciencia", "biografía", "historia"];

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/books`);
        setBooks(response.data);
      } catch (error) {
        console.error("Error al obtener los books:", error);
        setBooks(
          Array.from({ length: 10 }, (_, i) => ({
            id: i + 1,
            title: `Libro ${i + 1} (Prueba)`,
            author: `Autor ${i + 1}`,
            date: "01/01/2022",
            genre: "ficción",
            cover:
              "https://static.vecteezy.com/system/resources/thumbnails/008/513/521/small/stack-of-books-illustration-png.png",
            content:
              "En mis años más vulnerables, mi padre me dio un consejo que no ha dejado de darme vueltas en la cabeza desde entonces. «Cuando sientas deseos de criticar a alguien —me dijo—, recuerda simplemente que no todo el mundo ha tenido las ventajas que tú has tenido». No dijo nada más, pero siempre hemos sido inusualmente comunicativos a nuestra manera reservada, y comprendí que el consejo encerraba un significado mucho más amplio. Como consecuencia, tiendo a reservarme todos mis juicios, un hábito que me ha abierto el camino hacia muchas naturalezas curiosas y que también me ha convertido en víctima de unos cuantos pelmazos veteranos. " +
              "La mente anormal detecta y se aferra rápidamente a esta cualidad cuando aparece en una persona normal, y así ocurrió que en la universidad me acusaron injustamente de ser un político, porque conocía las penas secretas de hombres desconocidos y salvajes. La mayoría de las confidencias no fueron buscadas —frecuentemente fingí sueño, preocupación o una hostilidad de pacotilla cuando me di cuenta, por alguna señal inequívoca, de que en el horizonte se estaba gestando una revelación íntima—. " +
              "Llegó un momento en que me sentí incapaz de soportar más. Deseaba que el mundo estuviera en uniforme y en una especie de atención moral para siempre; no quería más incursiones alborotadas con visiones privilegiadas en el corazón humano. Solo Gatsby, el hombre que da nombre a este libro, estuvo exento de mi reacción: Gatsby, que representaba todo aquello por lo que siento un desprecio incondicional. " +
              "Si la personalidad es una serie ininterrumpida de gestos logrados, entonces había algo de espléndido en él, una sensibilidad exacerbada a las promesas de la vida, como si estuviera relacionado con una de esas máquinas complicadas que registran terremotos a diez mil millas de distancia. Esta capacidad de respuesta no tenía nada que ver con esa flácida impresionabilidad que se dignifica con el nombre de «temperamento creativo»; era un don extraordinario para la esperanza, una prontitud romántica como nunca he encontrado en ninguna otra persona y que no es probable que vuelva a encontrar jamás. " +
              "No, Gatsby resultó estar bien al final; fue lo que se cebó en Gatsby, el polvo sucio que flotaba en la estela de sus sueños, lo que cerró temporalmente mi interés por los dolores abortados y las alegrías efímeras de los hombres.",
          })),
        );
        alert("Sin conexión con el backend");
      }
    };
    fetchBooks();
  }, []);

  const openReadModal = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo-section">
          <h1 className="logo-text">Biblioteca</h1>
        </div>
        <button className="btn-add">+ Añadir Libro</button>
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
              <div
                key={book.id}
                className="book-card"
                onClick={() => openReadModal(book)}
              >
                <div className={`book-cover grad-${index % 10}`}>
                  <img src={book.cover} alt={book.title} />
                </div>
                <div className="book-info">
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                </div>
              </div>
            ))}
        </div>
      </section>

      {showModal && selectedBook && (
        <ReadModal book={selectedBook} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}

export default App;
