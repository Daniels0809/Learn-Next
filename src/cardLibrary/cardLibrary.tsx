import React from "react";

interface CardProps {
  authorId: number;
  name: string;
  nationality: string;
  birthYear: number;
  title?: string;
  color?: string;
  background?: string;
  buttonText?: string;
  onButtonClick: () => void;
  onDelete?: () => void;
}

export const CardLibrary = ({
  name,
  nationality,
  birthYear,
  title,
  background,
  buttonText = "Edit",
  onButtonClick,
  onDelete,
}: CardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden max-w-sm mx-auto p-5 border border-gray-100">
  {/* Header */}
  <div className="flex justify-between items-center mb-3">
    <h2 className="text-xl font-bold text-gray-800 truncate">
      {title}
    </h2>
    {background && (
      <span
        className="text-xs font-semibold px-2 py-1 rounded-full"
        style={{ backgroundColor: background, color: "#fff" }}
      >
        Featured
      </span>
    )}
  </div>

  {/* Autor */}
  <div className="space-y-2 mb-4">
    <p className="text-lg font-semibold text-gray-900">
      👤 {name || "Unknown Author"}
    </p>
    <p className="text-sm text-gray-600">
      🌍 Nationality: <span className="font-medium">{nationality || "N/A"}</span>
    </p>
    <p className="text-sm text-gray-600">
      🎂 Birth Year: <span className="font-medium">{birthYear || "Unknown"}</span>
    </p>
  </div>

  {/* Acciones */}
  <div className="flex gap-3 mt-4">
    <button
      onClick={onButtonClick}
      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-xl transition-colors duration-200"
    >
      {buttonText || "View"}
    </button>
    <button
      onClick={onDelete}
      className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded-xl transition-colors duration-200"
    >
      Delete
    </button>
  </div>
</div>

  );
};
