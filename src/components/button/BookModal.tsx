// src/components/bookModal.tsx
import React from "react";

interface BookData {
  _id?: string;
  idBook: number | "";
  title: string;
  authorId: number | "";
  category: string;
  publishedYear: number | "";
  availableCopies: number | "";
  img: string;
  createdAt: string;
}

interface BookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => Promise<void> | void;
  title: string;
  mode: "create" | "edit" | "delete";
  book: BookData;
  setBook: React.Dispatch<React.SetStateAction<BookData>>;
}

export const BookModal: React.FC<BookModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  mode,
  book,
  setBook,
}) => {
  if (!isOpen) return null;

  // Para inputs controlados, usar valores válidos ("" o número)
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="modal-content bg-gray-800 p-5 rounded-xl text-white w-full max-w-lg">
        <h2 className="text-lg font-bold mb-4">{title}</h2>

        {mode !== "delete" && (
          <div className="grid gap-2">
            <input
              type="number"
              placeholder="Book ID"
              value={book.idBook ?? ""}
              onChange={(e) =>
                setBook({ ...book, idBook: e.target.value === "" ? "" : Number(e.target.value) })
              }
            />
            <input
              type="text"
              placeholder="Title"
              value={book.title}
              onChange={(e) => setBook({ ...book, title: e.target.value })}
            />
            <input
              type="number"
              placeholder="Author ID"
              value={book.authorId ?? ""}
              onChange={(e) =>
                setBook({ ...book, authorId: e.target.value === "" ? "" : Number(e.target.value) })
              }
            />
            <input
              type="text"
              placeholder="Category"
              value={book.category}
              onChange={(e) => setBook({ ...book, category: e.target.value })}
            />
            <input
              type="number"
              placeholder="Published Year"
              value={book.publishedYear ?? ""}
              onChange={(e) =>
                setBook({
                  ...book,
                  publishedYear: e.target.value === "" ? "" : Number(e.target.value),
                })
              }
            />
            <input
              type="number"
              placeholder="Available Copies"
              value={book.availableCopies ?? ""}
              onChange={(e) =>
                setBook({
                  ...book,
                  availableCopies: e.target.value === "" ? "" : Number(e.target.value),
                })
              }
            />
            <input
              type="text"
              placeholder="Image URL"
              value={book.img}
              onChange={(e) => setBook({ ...book, img: e.target.value })}
            />
          </div>
        )}

        {mode === "delete" && (
          <p>
            Are you sure you want to delete the book "<span className="font-semibold">{book.title}</span>"?
          </p>
        )}

        <div className="flex gap-2 mt-4">
          <button
            onClick={() => void onSubmit()}
            className="bg-green-600 px-4 py-2 rounded"
          >
            {mode === "delete" ? "Confirm Delete" : "Save"}
          </button>
          <button onClick={onClose} className="bg-gray-600 px-4 py-2 rounded">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
