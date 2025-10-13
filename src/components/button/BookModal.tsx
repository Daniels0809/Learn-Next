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
  authors
}) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Books</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          {/* Book ID - Only in create mode */}
          {mode === "create" && (
            <div className="mb-4">
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
                className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Book ID"
              />
            </div>
          )}

          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              value={book.title}
              onChange={(e) => setBook({ ...book, title: e.target.value })}
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Book Title"
            />
          </div>

          {/* author id */}
          {/* <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Author
            </label>
            <input
              type="number"
              value={book.authorId}
              onChange={(e) =>
                setBook({ ...book, authorId: Number(e.target.value) })
              }
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Nationality"
            />
          </div> */}
          {/* Author selector */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Author
            </label>
            <select
              value={book.authorId}
              onChange={(e) =>
                setBook({ ...book, authorId: Number(e.target.value) })
              }
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
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
          <div className="mb-4">
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
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Magic, Drama, etc..."
            />
          </div>

          {/* PublishedYear */}
          <div className="mb-4 flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">
              Published Year
            </label>
            <input
              type="number"
              value={book.publishedYear}
              onChange={(e) =>
                setBook({ ...book, publishedYear: Number(e.target.value) })
              }
            />
          </div>

          {/* availableCopies */}
          <div className="mb-4 flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">
              Available Copies
            </label>
            <input
              type="number"
              value={book.availableCopies}
              onChange={(e) =>
                setBook({ ...book, availableCopies: Number(e.target.value) })
              }
            />
          </div>

          {/* image */}
          <div className="mb-4 flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              value={book.img}
              onChange={(e) => {
                const value = e.target.value.trim();

                //validamos que sea una URL o ruta valida
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
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Ej: https://example.com/book.jpg o /images/book.jpg"
            />
          </div>

          {/* createdAt */}
          <div className="mb-4 flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">
              createdAt
            </label>
            <input
              type="text"
              value={book.createdAt}
              onChange={(e) => setBook({ ...book, createdAt: e.target.value })}
            />
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>

            {mode === "delete" ? (
              <button
                type="submit"
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
              >
                Confirm Delete
              </button>
            ) : (
              <button
                type="submit"
                className={`px-4 py-2 rounded text-white ${
                  mode === "create"
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-blue-600 hover:bg-blue-700"
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
