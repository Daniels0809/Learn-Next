import React from "react";

interface AuthorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title: string;
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Authors</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          {/* Author ID - Only in create mode */}
          {mode === "create" && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Author ID
              </label>
              <input
                type="number"
                value={author.authorId}
                onChange={(e) =>
                  setAuthor({
                    ...author,
                    authorId: Number(e.target.value),
                  })
                }
                className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Author ID"
              />
            </div>
          )}

          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={author.name}
              onChange={(e) =>
                setAuthor({ ...author, name: e.target.value })
              }
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Author Name"
            />
          </div>

          {/* Nationality */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Nationality
            </label>
            <input
              type="text"
              value={author.nationality}
              onChange={(e) =>
                setAuthor({ ...author, nationality: e.target.value })
              }
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Nationality"
            />
          </div>

          {/* Birth Year */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Birth Year
            </label>
            <input
              type="number"
              value={author.birthYear}
              onChange={(e) =>
                setAuthor({
                  ...author,
                  birthYear: Number(e.target.value),
                })
              }
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Birth Year"
            />
          </div>

          {/* Is Active */}
          <div className="mb-4 flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">
              Active
            </label>
            <input
              type="checkbox"
              checked={author.isActive}
              onChange={(e) =>
                setAuthor({ ...author, isActive: e.target.checked })
              }
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
            <button
              type="submit"
              className={`px-4 py-2 rounded text-white ${
                mode === "create"
                  ? "bg-green-600 hover:bg-green-700"
                  : mode === "edit"? "bg-blue-600 hover:bg-blue-700" : "bg-red-600 hover:bg-red-700" 
              }`}
            >
              {mode === "create" ? "Create" : mode === "edit"?  "Save changes" : "Delete"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};