// import { CircleCheckBig, Ban } from "lucide-react";
// import Image from "next/image";
// import {sumar} from "@/helpers/utils";
// import Login from "@/login";
// import { useRouter } from "next/router";


import { userServices } from "@/services/users";
import { useState } from "react";
import {user} from "./api/hello"

//crear un html con atributo onClick => llama funcion local del componente, puede ser llamdo handleClic, instancie una clase y use un metodo getUsers => previamente debe crear una clase dentro de una carpeta llamada services/users.ts, crea la clase, agrega un atributo con la base url, y crea metodos que llamen al backend con un fetch => el backend debe tener un handler que retorne algo


export default function Home() {

const [userList, setUserList] = useState<user[]>([]);

  const handleClick = async () => {
    console.log("hola desde el front");

    const userClass = new userServices();

    const users = userClass.getUsers();

    const response = await users;
    const data = await response.json()

    console.log(data)
    setUserList(data.users);


    // users
    //   .then((data) => data.json())
    //   .then((response) => {
    //     console.log(response.users);
    //     setUserList(response.users)
    //   });

    //llamar un metodo de mi clase user que es un servicio
  };

  return (
    <>
      {/* <div>{Login()}</div> */}

      <div>
        <div>
          <div>Hola mundo</div>

          <button className="miButton" onClick={handleClick}>Obtener users</button>

            <div>{
              userList.map((item, index)=>{
                return(<div key={index}>
                  <div>{item.name}</div>
                  <div>{item.age}</div>
                </div>)
              
              })}
              </div>

        </div>
      </div>
    </>
  );
}



// const [state, setState] = useState(false);

// const handClick = () => {
//   setState(!state);
// };
