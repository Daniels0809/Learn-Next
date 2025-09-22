// import { CircleCheckBig, Ban } from "lucide-react";
// import Image from "next/image";
// import {sumar} from "@/helpers/utils";
// import Login from "@/login";
// import { useRouter } from "next/router";

// import { userServices } from "@/services/users";
// import { useState } from "react";
// import { user } from "./api/hello";
import { Bounce, ToastContainer, toast } from "react-toastify";

//crear un html con atributo onClick => llama funcion local del componente, puede ser llamdo handleClic, instancie una clase y use un metodo getUsers => previamente debe crear una clase dentro de una carpeta llamada services/users.ts, crea la clase, agrega un atributo con la base url, y crea metodos que llamen al backend con un fetch => el backend debe tener un handler que retorne algo

export default function Home() {
  const handleClickSucces = async () => {
    console.log("click");

    toast.success("Iniciaste sesion correctamente", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  const handleClickError = async () => {
    console.log("click");
  
    toast.error("Error al iniciar sesion", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    //   style: {
    //   background: "linear-gradient(to right, #E40303, #FF8C00, #FFED00, #008026, #004DFF, #750787)",
    //   color: "white",
    //   fontWeight: "bold",
    // },
      
    });
  };

  return (
    <>
      {/* <div>{Login()}</div> */}

      <div>
        <div>
          <button className="miButton" onClick={handleClickSucces}>
            Success!
          </button>
           
        </div>

        <div>
          <button className="miButton" onClick={handleClickError}>
            Error!
          </button>
          <ToastContainer />
        </div>

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
