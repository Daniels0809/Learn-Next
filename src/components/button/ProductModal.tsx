import React from "react";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  mode: "create" | "edit" | "delete";
  product: {
    sku: string;
    name: string;
    brand: string;
    quantity: number;
    price: number;
    isActive: boolean;
    category: string;
    imageUrl: string;
    createdAt: string;
  };
  setProduct: React.Dispatch<
    React.SetStateAction<{
      sku: string;
      name: string;
      brand: string;
      quantity: number;
      price: number;
      isActive: boolean;
      category: string;
      imageUrl: string;
      createdAt: string;
    }>
  >;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  mode,
  product,
  setProduct,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 tracking-tight">
          {mode === "create"
            ? "Add New Product"
            : mode === "edit"
            ? "Edit Product"
            : "Delete Product"}
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          className="space-y-5"
        >
          {/* Product ID (only create) */}
          {mode === "create" && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Product ID
              </label>
              <input
                type="text"
                value={product.sku}
                onChange={(e) =>
                  setProduct({ ...product, sku: e.target.value })
                }
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                placeholder="Enter Product ID"
              />
            </div>
          )}

          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              placeholder="Enter Product Name"
            />
          </div>

          {/* Brand */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Brand
            </label>
            <input
              type="text"
              value={product.brand}
              onChange={(e) =>
                setProduct({ ...product, brand: e.target.value })
              }
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              placeholder="Enter Nationality"
            />
          </div>

          {/* category */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              category
            </label>
            <input
              type="text"
              value={product.category}
              onChange={(e) =>
                setProduct({ ...product, category: e.target.value })
              }
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              placeholder="Enter category"
            />
          </div>
          {/* Precio */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Price
            </label>
            <input
              type="number"
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: Number(e.target.value) })
              }
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              placeholder="Enter Price"
            />
          </div>
          {/* quantity */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              quantity
            </label>
            <input
              type="number"
              value={product.quantity}
              onChange={(e) =>
                setProduct({ ...product, quantity: Number(e.target.value) })
              }
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              placeholder="Enter quantity"
            />
          </div>
          {/* image */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Image
            </label>
            <input
              type="number"
              value={product.imageUrl}
              onChange={(e) =>
                setProduct({ ...product, imageUrl: e.target.value })
              }
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              placeholder="Enter imageUrl"
            />
          </div>

          {/* Active */}
          <div className="flex items-center justify-between mt-2">
            <label className="text-sm font-semibold text-gray-700">
              Active
            </label>
            <input
              type="checkbox"
              checked={product.isActive}
              onChange={(e) =>
                setProduct({ ...product, isActive: e.target.checked })
              }
              className="h-5 w-5 accent-blue-500"
            />
          </div>
          {/* date */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              createdAt
            </label>
            <input
              type="text"
              value={product.createdAt}
              onChange={(e) =>
                setProduct({ ...product, createdAt: e.target.value })
              }
              className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="createdAt"
              disabled
            />
          </div>

          {/* Buttons */}
          <div className="mt-8 flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className={`px-5 py-2 rounded-lg font-semibold text-white shadow-md transition-all ${
                mode === "create"
                  ? "bg-green-600 hover:bg-green-700"
                  : mode === "edit"
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-red-600 hover:bg-red-700"
              }`}
            >
              {mode === "create"
                ? "Create Product"
                : mode === "edit"
                ? "Save Changes"
                : "Confirm Delete"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
