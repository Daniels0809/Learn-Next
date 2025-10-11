import React from "react";

interface CardBookProps {
  idBook?: number;
  title?: string;
  authorId?: number;
  category?: string;
  publishedYear?: number;
  availableCopies?: number;
  img?: string;
  createdAt?: string;
  color?: string;
  background?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  onDelete?: () => void;
}

export const CardBook = ({
  idBook,
  title,
  authorId,
  category,
  publishedYear,
  availableCopies,
  img,
  createdAt,
  background,
  buttonText = "Edit",
  onButtonClick,
  onDelete,
}: CardBookProps) => {
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

      <div className="text-gray-800 font-medium">Title: {title}</div>

      <div>
        {img}
      </div>
      <div className="text-gray-600">
        category: {category} <br />
        publishedYear: {publishedYear} <br />
        availableCopies: {availableCopies} <br />
        createdAt: {createdAt}
      </div>

      {/* Botón */}
      <div className="mt-4 gap-2 flex">
        <button
          onClick={onButtonClick}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-200"
        >
          {buttonText}
        </button>
        <button
          onClick={onDelete}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
