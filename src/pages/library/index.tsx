import { CardProduct } from "@/cardLibrary/cardProduct";
import { createProduct, getProducts, putProduct } from "@/services/products";
import React, { useContext, useEffect, useState } from "react";
import { deleteProduct } from "../../services/products";
import { CardUser } from "@/cardLibrary/cardUser";
import { createUser, putUser, deleteUser, getUser } from "@/services/users";
import { UserModal } from "@/components/button/UserModal";
import { useRouter } from "next/router";
import { MyContext } from "@/context/Context";
import { ProductModal } from "@/components/button/ProductModal";

interface productProps {
  _id?: string;
  sku: string; 
  name: string;
  brand: string; 
  quantity: number;
  price: number;
  isActive: boolean; 
  category: string;
  imageUrl: string; 
  createdAt: string;
}

interface dataProducts {
  ok: boolean;
  datos: productProps[];
}


interface userProps {
  _id?: string;
  username: string;
  password: string;
  role: string;
  createdAt: string;
}

interface dataUsers {
  ok: boolean;
  datos: userProps[];
}

export const Library = () => {
  const { userLogged } = useContext(MyContext);
  const router = useRouter();

useEffect(() => {
  const checkAccess = () => {
    const storedUser = localStorage.getItem("userLogged");

    if (!storedUser) {
      router.push("/");
      return;
    }

    const user = JSON.parse(storedUser);

    if (!user.isActive) {
      router.push("/");
      return;
    }

    if (user.role !== "admin") {
      router.push("/dashboard");
      return;
    }
  };

  checkAccess();
}, []);



  const [dataProducts, setDataProducts] = useState<dataProducts>({
    ok: false,
    datos: [],
  });

  const [dataUsers, setDataUsers] = useState<dataUsers>({
    ok: false,
    datos: [],
  });

  const [isUserModalOpen, setIsUserModalOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"create" | "edit" | "delete">(
    "create"
  );

  const [selectedProduct, setSelectedProduct] = useState<productProps>({

    sku: "",
    name: "",
    brand: "",
    quantity: 0,
  price: 0,
  isActive: true,
  category: "",
  imageUrl: "",
  createdAt: ""

  });

  const [selectedUser, setSelectedUser] = useState<userProps>({
    username: "",
    password: "",
    role: "",
    createdAt: new Date().toISOString(),
  });

const openCreateUserModal = () => {
  setModalMode("create");
  setSelectedUser({
    username: "",
    password: "",
    role: "",
    createdAt: new Date().toISOString(),
  });
  setIsUserModalOpen(true);
};


  const openEditUserModal = (user: userProps) => {
    setModalMode("edit");
    setSelectedUser(user);
    setIsUserModalOpen(true);
  };

  const handleDeleteUser = (user: userProps) => {
    setModalMode("delete");
    setSelectedUser(user);
    setIsUserModalOpen(true);
  };


  const openCreateModal = async () => {
    setModalMode("create");
    setSelectedProduct({
    sku: "",
    name: "",
    brand: "",
    quantity: 0,
    price: 0,
    isActive: false,
    category: "",
    imageUrl: "",
    createdAt: new Date().toISOString(),
    });
    setIsModalOpen(true);
    const response = await getProducts();
    setDataProducts(response);
  };

  const openEditModal = async (product: productProps) => {
    setModalMode("edit");
    setSelectedProduct(product);
    setIsModalOpen(true);
    const response = await getProducts();
    setDataProducts(response);
  };

  const handleDelete = async (id: string, product: productProps) => {
    try {
      setModalMode("delete");
      setSelectedProduct(product);
      setIsModalOpen(true);
      const response = await getProducts();
      setDataProducts(response);
    } catch (error) {
      alert("Error deleting product");
    }
  };

  const handleSubmitModal = async () => {
    if (!selectedProduct.name || !selectedProduct.category) {
      alert("Please complete all fields");
      return;
    }

    if (
      modalMode === "create" &&
      dataProducts.datos.some(
        (product) => product.sku === selectedProduct.sku
      )
    ) {
      alert("An product whit this ID already exists.");
      return;
    }

    try {
      if (modalMode === "create") {
        await createProduct(
          selectedProduct.sku,
          selectedProduct.name,
          selectedProduct.brand,
          selectedProduct.quantity,
          selectedProduct.price,
          selectedProduct.isActive,
          selectedProduct.category,
          selectedProduct.imageUrl,
          selectedProduct.createdAt
        );
      }
      if (modalMode === "edit" && selectedProduct._id) {
        await putProduct({
          _id: selectedProduct._id,
          sku: selectedProduct.sku,
          name: selectedProduct.name,
          brand: selectedProduct.brand,
          quantity: selectedProduct.quantity,
          price: selectedProduct.price,
          isActive: selectedProduct.isActive,
          category: selectedProduct.category,
          imageUrl: selectedProduct.imageUrl,
          createdAt: selectedProduct.createdAt
        });
      }
      if (modalMode === "delete") {
        await deleteProduct(selectedProduct._id as string);
      }

      const response = await getProducts();
      setDataProducts(response);
      setIsModalOpen(false);
    } catch (error) {
      console.log("Error while savinf product:", error);
      alert("There was an error while saving the product.");
    }
  };

  useEffect(() => {
    const fechData = async () => {
      const product = await getProducts();
      const users = await getUser();
      setDataProducts(product);
      setDataUsers(users);
    };
    fechData();
  }, []);


const { setUserLogged, setIsActive } = useContext(MyContext);
const route = useRouter();

const handleLogout = () => {
  localStorage.removeItem("userLogged");
  setUserLogged({ username: "", role: "user", isActive: false, createdAt: "" });
  setIsActive(false);
  route.push("/")
};


const handleSubmitUserModal = async () => {
    // 1. Validar campos del USUARIO
    if (!selectedUser.username || !selectedUser.password) {
        alert("Please complete all fields for the user.");
        return;
    }

    try {
        // 2. Lógica CRUD para USUARIOS
        if (modalMode === "create") {
            await createUser(selectedUser);
        } else if (modalMode === "edit" && selectedUser._id) {
            // Asegúrate de enviar solo los campos actualizables si la API lo requiere
            await putUser(selectedUser); 
        } else if (modalMode === "delete" && selectedUser._id) {
            await deleteUser(selectedUser._id);
        }

        // 3. Recargar la lista de usuarios y cerrar el modal
        const response = await getUser();
        setDataUsers(response);
        setIsUserModalOpen(false); // Cierra el modal de usuario
    } catch (error) {
        console.log("Error while saving user:", error);
        alert("There was an error while saving the user.");
    }
};

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-300 to-gray-200 text-gray-800">
  {/* Header */}
  <header className="flex justify-between items-center bg-white shadow-md px-8 py-4 sticky top-0 z-10">
    <h1 className="text-2xl font-bold text-gray-800">📚 Admin Panel</h1>
    <div className="flex gap-3">
      <button
        onClick={openCreateUserModal}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
      >
        ➕ Add User
      </button>
      <button
        onClick={openCreateModal}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
      >
        📦 Add Product
      </button>
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
      >
        ⎋ Logout
      </button>
    </div>
  </header>

  {/* Contenido principal */}
  <main className="px-8 py-10">
    {/* Users Section */}
    <section className="mb-12">
      <h2 className="text-xl font-semibold mb-4 border-l-4 border-blue-600 pl-3">
        Users
      </h2>

      {dataUsers.datos && dataUsers.datos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataUsers.datos.map((user: userProps) => {
            return (
              <CardUser
                key={user._id}
                username={user.username}
                password={user.password}
                role={user ? user.role : "Unknown role"}
                createdAt={user.createdAt}
                buttonText="Edit"
                onButtonClick={() => openEditUserModal(user)}
                onDelete={() => handleDeleteUser(user)}
              />
            );
          })}
        </div>
      ) : (
        <p className="text-gray-500 italic">No users found.</p>
      )}
    </section>

    {/* Users Section */}
    <section>
      <h2 className="text-xl font-semibold mb-4 border-l-4 border-green-600 pl-3">
        Products
      </h2>

      {dataProducts.datos && dataProducts.datos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataProducts.datos.map((product: productProps) => (
            <CardProduct
              key={product.sku}
              sku={product.sku}
              name={product.name}
              brand={product.brand}
              quantity={product.quantity}
              price={product.price}
              isActive={product.isActive}
              category={product.category}
              img={product.imageUrl}
              createdAt={product.createdAt}
              buttonText="Edit"
              onButtonClick={() => openEditModal(product)}
              onDelete={() => handleDelete(String(product._id), product)}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 italic">No products found.</p>
      )}
    </section>
  </main>


  {/* Modals */}
  <UserModal
    isOpen={isUserModalOpen}
    onClose={() => setIsUserModalOpen(false)}
    // ¡CORRECCIÓN CLAVE! ASIGNAR LA FUNCIÓN CORRECTA PARA USUARIOS
    onSubmit={handleSubmitUserModal} 
    title={
      modalMode === "create"
        ? "Create User" // Título corregido
        : modalMode === "edit"
        ? "Edit User" // Título corregido
        : "Delete User" // Título corregido
    }
    mode={modalMode}
    user={selectedUser}
    setUser={setSelectedUser}
  />

  <ProductModal
    isOpen={isModalOpen}
    onClose={() => setIsModalOpen(false)}
    // NOTA: Esta línea DEBERÍA usar una función separada (ej: handleSubmitProductModal)
    // Pero si handleSubmitModal ya tiene la lógica de Productos, se mantiene por ahora.
    onSubmit={handleSubmitModal} 
    mode={modalMode}
    product={selectedProduct}
    setProduct={setSelectedProduct}
  />
</div>
    </>
  );
};

export default Library;
