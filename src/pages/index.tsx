// import { CircleCheckBig, Ban } from "lucide-react";
// import Image from "next/image";
// import {sumar} from "@/helpers/utils";
// import Login from "@/login";
// import { useRouter } from "next/router";

// import { userServices } from "@/services/users";
// import { useState } from "react";
// import { user } from "./api/hello";
import { MiButton } from "@/components/button/Button";
import { notification } from "@/helpers/utils";
import { ToastContainer } from "react-toastify";

//crear un html con atributo onClick => llama funcion local del componente, puede ser llamdo handleClic, instancie una clase y use un metodo getUsers => previamente debe crear una clase dentro de una carpeta llamada services/users.ts, crea la clase, agrega un atributo con la base url, y crea metodos que llamen al backend con un fetch => el backend debe tener un handler que retorne algo

export default function Home() {
  const handleClickError = async () => {
    notification("Sucedio un error", "error", 500);
  };
  const handleClickSucces = async () => {
    notification("Iniciaste sesion correctamente", "success",1000);
  };

  const handleClickWarning = async () => {
    notification("Cuidado!", "warning", 500);
  };

  const handleClickInfo = async () => {
    notification("Boton info", "info",1000);
  };

  return (
    <>
      {/* <div>{Login()}</div> */}

      <div className="container ">
          <button id="success" className="miButton" onClick={handleClickSucces}>Success!</button>

          <button id="error" className="miButton" onClick={handleClickError}>Error!</button>

          <button id="warning" className="miButton" onClick={handleClickWarning}>Warning!</button>

          <button id="info" className="miButton" onClick={handleClickInfo}>Info!</button>
      <MiButton text={"Guardar"} icon={"S"}/>
      <MiButton text={"Cancelar"} icon={"X"}/>
      
      <ToastContainer/>
        {/* <div>
          <div>Hola mundo</div>

          <button className="miButton" onClick={handleClick}>
            Obtener users
          </button>

          <div>
            {userList.map((item, index) => {
              return (
                <div key={index}>
                  <div>{item.name}</div>
                  <div>{item.age}</div>
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
    </>
  );
}

// const [state, setState] = useState(false);

// const handClick = () => {
//   setState(!state);
// };
