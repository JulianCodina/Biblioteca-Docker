import { useForm } from "react-hook-form";

function CreateModal({ onClose, onSave }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const genreValue = watch("genre");

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <header className="modal-header">
          <div className="modal-meta">
            <h2>Añadir Nuevo Libro</h2>
            <span>Rellena el formulario para expandir la colección</span>
          </div>
          <button className="btn-nav" onClick={onClose}>
            ✕
          </button>
        </header>

        <form onSubmit={handleSubmit(onSave)}>
          <main className="modal-body">
            <div className="row">
              <div className="item">
                <label htmlFor="title">Título</label>
                <input
                  type="text"
                  id="title"
                  placeholder="Título del libro"
                  {...register("title", {
                    required: "El título es obligatorio",
                  })}
                />
                {errors.title && (
                  <span className="error-msg">{errors.title.message}</span>
                )}
              </div>
              <div className="item">
                <label htmlFor="author">Autor</label>
                <input
                  type="text"
                  id="author"
                  placeholder="Autor del libro"
                  {...register("author", {
                    required: "El autor es obligatorio",
                  })}
                />
                {errors.author && (
                  <span className="error-msg">{errors.author.message}</span>
                )}
              </div>
            </div>
            <div className="row">
              <div className="item">
                <label htmlFor="cover">Portada</label>
                <input
                  type="text"
                  id="cover"
                  placeholder="URL de la portada del libro"
                  {...register("cover", {
                    required: "La portada es obligatoria",
                  })}
                />
                {errors.cover && (
                  <span className="error-msg">{errors.cover.message}</span>
                )}
              </div>
              <div className="item">
                <label htmlFor="genre">Género</label>
                <select
                  id="genre"
                  className={!genreValue ? "select-placeholder" : ""}
                  {...register("genre", {
                    required: "El genero es obligatorio",
                  })}
                >
                  <option value="" hidden>
                    Selecciona un género
                  </option>
                  <option value="ficción">Ficción</option>
                  <option value="ciencia">Ciencia</option>
                  <option value="historia">Historia</option>
                  <option value="biografía">Biografía</option>
                </select>
                {errors.genre && (
                  <span className="error-msg">{errors.genre.message}</span>
                )}
              </div>
            </div>
            <div className="item">
              <label htmlFor="content">Contenido</label>
              <textarea
                id="content"
                placeholder="Contenido del libro"
                {...register("content", {
                  required: "El contenido es obligatorio",
                })}
                style={{ resize: "none", height: "130px" }}
              />
              {errors.content && (
                <span className="error-msg">{errors.content.message}</span>
              )}
            </div>
          </main>

          <footer className="modal-footer">
            <button className="btn-nav" onClick={onClose}>
              Cancelar
            </button>
            <button className="btn-close" type="submit">
              Guardar
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
}

export default CreateModal;
