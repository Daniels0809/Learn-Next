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
    <div className="bg-gray-100 rounded-lg shadow-md p-4 mb-4 w-full max-w-md mx-auto">
      {/* Título */}
      {title && (
        <div
          className="text-lg font-semibold mb-2"
          style={
            background
              ? {
                  backgroundColor: background,
                  padding: "0.25rem",
                  borderRadius: "0.25rem",
                }
              : {}
          }
        >
          {title}
        </div>
      )}

      {/* Autor */}
      {authorName && (
        <div className="text-sm text-gray-500 mb-2">By: {authorName}</div>
      )}

      {/* Imagen */}
      <div className="mb-3">
        {img ? (
          // Si usas imágenes externas recuerda configurar domains en next.config.js
          <Image alt={title ?? "book"} width={200} height={200} src={validImg} />
        ) : (
          <div className="w-[200px] h-[200px] bg-gray-300 flex items-center justify-center">
            No image
          </div>
        )}
      </div>

      <div className="text-gray-600 text-sm">
        <div>Category: {category}</div>
        <div>Year: {publishedYear}</div>
        <div>Copies: {availableCopies}</div>
        <div>Created: {createdAt}</div>
      </div>

      {/* Botones */}
      <div className="mt-4 gap-2 flex">
        <button
          onClick={onButtonClick}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-200"
        >
          {buttonText}
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CardBook;
