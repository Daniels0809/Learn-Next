import { ToastContainer } from "react-toastify";
import { Button, Input, Switch } from "@heroui/react";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { notification } from "@/helpers/utils";
import { MyContext } from "@/context/Context";
import { loginUser } from "@/services/auth";

export default function Home() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");


  const { setUserLogged, setIsActive, isActive } = useContext(MyContext);

  const router = useRouter();

  const handleClick = async () => {

    try {
      const loggedUser = await loginUser(user, pass);

      if (!loggedUser.isActive) {
       notification("Tu cuenta esta inactiva", "error")
       return; 
      }

      setUserLogged(loggedUser);
      setIsActive(true);
      notification("Login succesfull", "success");

      if(loggedUser.role === "admin"){
        router.push("/library");
      } else {
        router.push("/dashboard");
      }
    } catch (error: any) {
      notification(error.message, "error")
    }
 };



  return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 p-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8 border border-gray-200">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Iniciar sesión
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Bienvenido al panel de administración
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <Input
              placeholder="Ingrese su correo electrónico"
              type="text"
              onChange={(e) => setUser(e.target.value)}
              className="w-full border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Contraseña
            </label>
            <Input
              placeholder="Ingrese su contraseña"
              type="password"
              onChange={(e) => setPass(e.target.value)}
              className="w-full border border-gray-300 rounded-lg"
            />
          </div>

          <Button
            onPress={handleClick}
            className="w-full mt-6 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-xl py-3 transition-all shadow-md hover:shadow-lg"
          >
            Iniciar sesión
          </Button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            <strong>Admin:</strong> daniel@example.com
          </p>
          <p>
            <strong>Password:</strong> 123456
          </p>
        </div>

        <div className="flex flex-col items-center mt-6">
          <div
            className={`text-sm font-semibold mb-2 ${
              isActive ? "text-green-600" : "text-red-600"
            }`}
          >
            {isActive ? "Activo" : "Desactivado"}
          </div>
          <Switch
            isSelected={isActive}
            onValueChange={setIsActive}
            className="text-gray-700"
          >
            Modo activo
          </Switch>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
