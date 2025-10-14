import React from "react";


interface BookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title: string;
  mode: "create" | "edit" | "delete";
  user: {
  username: string;
  password: string;
  role: string;
  createdAt: string;
  };

  setUser: React.Dispatch<
    React.SetStateAction<{
      username: string;
      password: string;
      role: string;
      createdAt: string;
    }>
  >;
}

export const UserModal: React.FC<BookModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  mode,
  user,
  setUser,

}) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-300/60 via-gray-400/40 to-gray-500/30 backdrop-blur-md transition-all duration-300">
      {title}
      <div className="bg-white/95 rounded-2xl shadow-2xl w-full max-w-md p-8 border border-gray-200 relative animate-fadeIn">
        {/* Título */}
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
          {mode === "create"
            ? "📘 Create new User"
            : mode === "edit"
            ? "✏️ Edit User"
            : "🗑️ Delete User"}
        </h2>

        {/* Formulario */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          className="space-y-4"
        >

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              User Name
            </label>
            <input
              type="text"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="User Name"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="text"
              value={user.password}
              onChange={(e) =>
                setUser({
                  ...user,
                  password: e.target.value,
                })
              }
              className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Password"
            />
          </div>

          {/* role */}
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">
              Role
            </label>
            <input
              type="text"
              value={user.role}
              onChange={(e) =>
                setUser({ ...user , role: (e.target.value) })
              }
              className="border border-gray-300 rounded-lg px-3 py-1 w-24 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>

          
          {/* CreatedAt */}
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">
              Created At
            </label>
            <input
              type="text"
              value={user.createdAt}
              onChange={(e) => setUser({ ...user, createdAt: e.target.value })}
              className="border border-gray-300 rounded-lg px-3 py-1 w-40 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-800 font-medium transition-all"
            >
              Cancelar
            </button>

            {mode === "delete" ? (
              <button
                type="submit"
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all"
              >
                Confirmar Eliminación
              </button>
            ) : (
              <button
                type="submit"
                className={`px-4 py-2 rounded-lg text-white font-medium transition-all ${
                  mode === "create"
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-indigo-600 hover:bg-indigo-700"
                }`}
              >
                {mode === "create" ? "Create User" : "Update User"}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
