// src/cardLibrary/cardBook.tsx
import React from "react";
import Image from "next/image";

interface CardBookProps {
  _id?: string;
  idBook?: number;
  title?: string;
  authorId?: number;
  authorName?: string;
  category?: string;
  publishedYear?: number;
  availableCopies?: number;
  img?: string;
  createdAt?: string;
  background?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  onDelete?: () => void;
}

export const CardBook: React.FC<CardBookProps> = ({
  title,
  authorName,
  category,
  publishedYear,
  availableCopies,
  img,
  createdAt,
  background,
  buttonText = "Edit",
  onButtonClick,
  onDelete,
}) => {
  const validImg =
    img && (img.startsWith("http") || img.startsWith("/"))
      ? img
      : "/default-book.jpg";
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-[1.02] hover:shadow-2xl duration-300 w-full max-w-md mx-auto">
      {/* Imagen */}
      <div className="relative h-80 w-full bg-gray-100 flex items-center justify-center">
        {img ? (
          <Image
            alt={title ?? "book"}
            width={400}
            height={400}
            src={validImg}
            className="w-full h-full object-contain p-3 transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400 text-sm">
            No image available
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-5">
        {/* Título */}
        <h3 className="text-xl font-semibold text-gray-800 mb-1 truncate">
          {title || "Untitled Book"}
        </h3>

        {/* Autor */}
        <p className="text-sm text-gray-500 mb-3 italic">
          {authorName ? `by ${authorName}` : "Unknown Author"}
        </p>

        {/* Detalles */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-gray-600 text-sm mb-4">
          <span className="font-medium text-gray-700">📚 Category:</span>
          <span>{category || "N/A"}</span>

          <span className="font-medium text-gray-700">📅 Year:</span>
          <span>{publishedYear || "N/A"}</span>

          <span className="font-medium text-gray-700">🔢 Copies:</span>
          <span>{availableCopies ?? 0}</span>

          <span className="font-medium text-gray-700">🕓 Added:</span>
          <span>{createdAt || "Unknown"}</span>
        </div>

        {/* Botones */}
        <div className="flex justify-between mt-4">
          <button
            onClick={onButtonClick}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl mr-2 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            {buttonText || "Edit"}
          </button>
          <button
            onClick={onDelete}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardBook;
