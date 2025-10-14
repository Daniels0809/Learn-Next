import React from "react";

interface Author {
  _id?: string;
  authorId: number;
  name: string;
  nationality: string;
  birthYear: number;
  isActive: boolean;
}

interface BookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  mode: "create" | "edit" | "delete";
  book: {
    idBook: number;
    title: string;
    authorId: number;
    category: string;
    publishedYear: number;
    availableCopies: number;
    img: string;
    createdAt: string;
    action?: string;
  };

  setBook: React.Dispatch<
    React.SetStateAction<{
      idBook: number;
      title: string;
      authorId: number;
      category: string;
      publishedYear: number;
      availableCopies: number;
      img: string;
      createdAt: string;
    }>
  >;
  authors: Author[];
}

export const BookModal: React.FC<BookModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  mode,
  book,
  setBook,
  authors,
}) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-300/60 via-gray-400/40 to-gray-500/30 backdrop-blur-md transition-all duration-300">
      <div className="bg-white/95 rounded-2xl shadow-2xl w-full max-w-md p-8 border border-gray-200 relative animate-fadeIn">
        {/* Título */}
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
          {mode === "create"
            ? "📘 Crear Nuevo Libro"
            : mode === "edit"
            ? "✏️ Editar Libro"
            : "🗑️ Eliminar Libro"}
        </h2>

        {/* Formulario */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          className="space-y-4"
        >
          {/* Book ID */}
          {mode === "create" && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Book ID
              </label>
              <input
                type="number"
                value={book.idBook}
                onChange={(e) =>
                  setBook({
                    ...book,
                    idBook: Number(e.target.value),
                  })
                }
                className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                placeholder="Book ID"
              />
            </div>
          )}

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              value={book.title}
              onChange={(e) => setBook({ ...book, title: e.target.value })}
              className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Book Title"
            />
          </div>

          {/* Author */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Author
            </label>
            <select
              value={book.authorId}
              onChange={(e) =>
                setBook({ ...book, authorId: Number(e.target.value) })
              }
              className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
            >
              <option value="">Selecciona un autor</option>
              {authors.map((author) => (
                <option key={author._id} value={author.authorId}>
                  {author.name}
                </option>
              ))}
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <input
              type="text"
              value={book.category}
              onChange={(e) =>
                setBook({
                  ...book,
                  category: e.target.value,
                })
              }
              className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Magic, Drama, etc..."
            />
          </div>

          {/* Published Year */}
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">
              Published Year
            </label>
            <input
              type="number"
              value={book.publishedYear}
              onChange={(e) =>
                setBook({ ...book, publishedYear: Number(e.target.value) })
              }
              className="border border-gray-300 rounded-lg px-3 py-1 w-24 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>

          {/* Available Copies */}
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">
              Available Copies
            </label>
            <input
              type="number"
              value={book.availableCopies}
              onChange={(e) =>
                setBook({ ...book, availableCopies: Number(e.target.value) })
              }
              className="border border-gray-300 rounded-lg px-3 py-1 w-24 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              value={book.img}
              onChange={(e) => {
                const value = e.target.value.trim();
                if (
                  value === "" ||
                  value.startsWith("http://") ||
                  value.startsWith("https://") ||
                  value.startsWith("/")
                ) {
                  setBook({ ...book, img: e.target.value });
                } else {
                  alert(
                    "⚠ La URL de la imagen debe empezar con 'http', 'https' o '/'"
                  );
                }
              }}
              className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="https://example.com/book.jpg"
            />
          </div>

          {/* CreatedAt */}
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">
              Created At
            </label>
            <input
              type="text"
              value={book.createdAt}
              onChange={(e) => setBook({ ...book, createdAt: e.target.value })}
              className="border border-gray-300 rounded-lg px-3 py-1 w-40 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-800 font-medium transition-all"
            >
              Cancelar
            </button>

            {mode === "delete" ? (
              <button
                type="submit"
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all"
              >
                Confirmar Eliminación
              </button>
            ) : (
              <button
                type="submit"
                className={`px-4 py-2 rounded-lg text-white font-medium transition-all ${
                  mode === "create"
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-indigo-600 hover:bg-indigo-700"
                }`}
              >
                {mode === "create" ? "Crear Libro" : "Actualizar Libro"}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
