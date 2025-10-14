import Image from "next/image";
import React from "react";

interface CardProductProps {
  sku: string;
  name: string;
  brand: string;
  quantity: number;
  price: number;
  isActive: boolean;
  category: string;
  img: string;
  createdAt: string;
  buttonText?: string;
  onButtonClick?: () => void;
  onDelete?: () => void;
}

export const CardProduct: React.FC<CardProductProps> = ({
  sku,
  name,
  brand,
  quantity,
  price,
  isActive,
  category,
  img,
  createdAt,
  buttonText = "Edit",
  onButtonClick,
  onDelete,
}) => {
  const validImg =
    img && (img.startsWith("http") || img.startsWith("/"))
      ? img
      : "/default-product.jpg"; // Imagen por defecto si no se proporciona

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-[1.02] hover:shadow-2xl duration-300 w-full max-w-md mx-auto">
      {/* Imagen */}
      <div className="relative h-80 w-full bg-gray-100 flex items-center justify-center">
        {img ? (
          <Image
            alt={name || "Product"}
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
        {/* SKU */}
        <p className="text-sm text-gray-500 mb-2 font-medium">
          <span className="font-bold text-gray-700">SKU:</span> {sku || "N/A"}
        </p>

        {/* Nombre del producto */}
        <h3 className="text-xl font-semibold text-gray-800 mb-1 truncate">
          {name || "Untitled Product"}
        </h3>

        {/* Marca */}
        <p className="text-sm text-gray-500 mb-3 italic">
          {brand || "Unknown Brand"}
        </p>

        {/* Detalles */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-gray-600 text-sm mb-4">
          <span className="font-medium text-gray-700">📦 Category:</span>
          <span>{category || "N/A"}</span>

          <span className="font-medium text-gray-700">🔢 Quantity:</span>
          <span>{quantity}</span>

          <span className="font-medium text-gray-700">💰 Price:</span>
          <span>{price ? `$${price.toFixed(2)}` : "N/A"}</span>

          <span className="font-medium text-gray-700">🕓 Added:</span>
          <span>{createdAt || "Unknown"}</span>
        </div>

        {/* Estado */}
        <p className={`text-sm ${isActive ? "text-green-600" : "text-red-600"}`}>
          {isActive ? "Active" : "Inactive"}
        </p>

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

export default CardProduct;