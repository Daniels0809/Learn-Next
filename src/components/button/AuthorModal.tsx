import React from "react";

interface AuthorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  mode: "create" | "edit" | "delete";
  author: {
    authorId: number;
    name: string;
    nationality: string;
    birthYear: number;
    isActive: boolean;
  };
  setAuthor: React.Dispatch<
    React.SetStateAction<{
      authorId: number;
      name: string;
      nationality: string;
      birthYear: number;
      isActive: boolean;
    }>
  >;
}

export const AuthorModal: React.FC<AuthorModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  mode,
  author,
  setAuthor,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 tracking-tight">
          {mode === "create"
            ? "Add New Author"
            : mode === "edit"
            ? "Edit Author"
            : "Delete Author"}
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          className="space-y-5"
        >
          {/* Author ID (only create) */}
          {mode === "create" && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Author ID
              </label>
              <input
                type="number"
                value={author.authorId}
                onChange={(e) =>
                  setAuthor({ ...author, authorId: Number(e.target.value) })
                }
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                placeholder="Enter Author ID"
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
              value={author.name}
              onChange={(e) => setAuthor({ ...author, name: e.target.value })}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              placeholder="Enter Author Name"
            />
          </div>

          {/* Nationality */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Nationality
            </label>
            <input
              type="text"
              value={author.nationality}
              onChange={(e) =>
                setAuthor({ ...author, nationality: e.target.value })
              }
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              placeholder="Enter Nationality"
            />
          </div>

          {/* Birth Year */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Birth Year
            </label>
            <input
              type="number"
              value={author.birthYear}
              onChange={(e) =>
                setAuthor({ ...author, birthYear: Number(e.target.value) })
              }
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              placeholder="Enter Birth Year"
            />
          </div>

          {/* Active */}
          <div className="flex items-center justify-between mt-2">
            <label className="text-sm font-semibold text-gray-700">
              Active
            </label>
            <input
              type="checkbox"
              checked={author.isActive}
              onChange={(e) =>
                setAuthor({ ...author, isActive: e.target.checked })
              }
              className="h-5 w-5 accent-blue-500"
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
                ? "Create Author"
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
