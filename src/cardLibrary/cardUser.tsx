// src/cardLibrary/cardBook.tsx
import React from "react";
import Image from "next/image";

interface CardUserProps {
  _id?: string;
  username?: string;
  password?: string;
  role?: string;
  createdAt?: string;
  background?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  onDelete?: () => void;
}

export const CardUser: React.FC<CardUserProps> = ({
  username,
  password,
  role,
  createdAt,
  background,
  buttonText = "Edit",
  onButtonClick,
  onDelete,
}) => {
  // const validImg =
  //   img && (img.startsWith("http") || img.startsWith("/"))
  //     ? img
  //     : "/default-book.jpg";
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-[1.02] hover:shadow-2xl duration-300 w-full max-w-md mx-auto">
      {/* Imagen */}
      {/* <div className="relative h-80 w-full bg-gray-100 flex items-center justify-center">
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
      </div> */}

      {/* Contenido */}
      <div className="p-5">
        {/* username */}
        <h3 className="text-xl font-semibold text-gray-800 mb-1 truncate">
          {username || "Not user name"}
        </h3>

        {/* password */}
        <p className="text-sm text-gray-500 mb-3 italic">
          {password ? `by ${password}` : "Unknown password"}
        </p>

        {/* Detalles */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-gray-600 text-sm mb-4">
          <span className="font-medium text-gray-700">📚 Role:</span>
          <span>{role || "N/A"}</span>

          <span className="font-medium text-gray-700">📅 createdAt:</span>
          <span>{createdAt || "N/A"}</span>
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

export default CardUser;
