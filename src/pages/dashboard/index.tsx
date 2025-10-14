import { MyContext } from "@/context/Context";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getProducts } from "@/services/products"; 
import { CardProduct } from "@/cardLibrary/cardProduct"; 
import { Button } from "@heroui/react";


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

const Dashboard = () => {
  const router = useRouter();
  const { userLogged } = useContext(MyContext);
  
  const [products, setDataProducts] = useState<dataProducts>({
    ok: false,
    datos: [],
  });
  
  useEffect(() => {
    if (!userLogged || !userLogged.username) { 
      router.push("/");
    }
  }, [userLogged, router]);

  useEffect(() => {
    const fetchData = async () => {
       const fetchedProducts = await getProducts(); 
       setDataProducts(fetchedProducts);
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userLogged");
    router.push("/"); // redirige al index principal
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-3xl p-8">
        <div className="flex justify-between items-center mb-8">
          {/* Título cambiado a "Product Dashboard" */}
          <h1 className="text-3xl font-bold text-gray-800">📦 Product Dashboard</h1>

          <div className="flex items-center gap-4">
            <p className="text-gray-600">
              Welcome, <span className="font-semibold">{userLogged?.username}</span>
              <br />
              <span className="text-sm text-gray-500">
                Role: {userLogged?.role}
              </span>
            </p>
            <Button
              color="danger"
              variant="shadow"
              onPress={handleLogout}
              className="font-semibold"
            >
              Logout
            </Button>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">Available Products</h2>
        
        {/* 🧾 Lista de productos */}
        {products.datos && products.datos.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.datos.map((product: productProps) => {
                    return (
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
                      />
                    );
                  })}
          </div>
        ) : (
          <p className="text-gray-500 text-center">No products available.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;