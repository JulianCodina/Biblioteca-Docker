import React, { useState } from "react";

function ReadModal({ book, onClose }) {
  const [currentPage, setCurrentPage] = useState(0);

  const words = book.content.split(/\s+/);
  const wordsPerPage = 300;
  const pages = [];
  for (let i = 0; i < words.length; i += wordsPerPage) {
    pages.push(words.slice(i, i + wordsPerPage).join(" "));
  }

  const totalPages = pages.length;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <header className="modal-header">
          <div className="modal-meta">
            <h4>{book.title}</h4>
            <span>{book.author}</span>
          </div>
          <button className="btn-close" onClick={onClose}>
            ✕ Cerrar
          </button>
        </header>

        <main className="modal-body">
          <div className="reader-text">{pages[currentPage]}</div>
        </main>

        <footer className="modal-footer">
          <button
            className="btn-nav"
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
          >
            ← Anterior
          </button>
          <span className="page-info">
            Página {currentPage + 1} de {totalPages}
          </span>
          <button
            className="btn-nav"
            onClick={() =>
              setCurrentPage(Math.min(totalPages - 1, currentPage + 1))
            }
            disabled={currentPage === totalPages - 1}
          >
            Siguiente →
          </button>
        </footer>
      </div>
    </div>
  );
}

export default ReadModal;
