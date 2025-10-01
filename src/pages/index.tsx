// import { CircleCheckBig, Ban } from "lucide-react";
// import Image from "next/image";
// import {sumar} from "@/helpers/utils";
// import Login from "@/login";
// import { useRouter } from "next/router";

import { MiButton } from "@/components/button/Button";
import { getProperties } from "@/services/properties";
import { useState } from "react";

// import { userServices } from "@/services/users";
// import { useState } from "react";
// import { user } from "./api/hello";
// import { Badge } from "@/badge/Badge";
// import { Card } from "@/card/Card";
// import { MiButton } from "@/components/button/Button";
// import { notification } from "@/helpers/utils";
// import { useState } from "react";
// // import { MiButton } from "@/components/button/Button";
// import { notification } from "@/helpers/utils";
// import { ToastContainer } from "react-toastify";
//crear un html con atributo onClick => llama funcion local del componente, puede ser llamdo handleClic, instancie una clase y use un metodo getUsers => previamente debe crear una clase dentro de una carpeta llamada services/users.ts, crea la clase, agrega un atributo con la base url, y crea metodos que llamen al backend con un fetch => el backend debe tener un handler que retorne algo

// import { ToastContainer } from "react-toastify";
// import { CgCheckO, CgCloseO, CgInfo } from "react-icons/cg";
// import { PiArrowCircleUpRightFill } from 'react-icons/pi';

export default function Home() {
  // const handleClickError = async () => {
  //   notification("Sucedio un error", "error", 500);
  // };
  // const handleClickSucces = async () => {
  //   notification("Iniciaste sesion correctamente", "success", 1000);
  // };

  // const handleClickWarning = async () => {
  //   notification("Cuidado!", "warning", 500);
  // };

  // const handleClickInfo = async () => {
  //   notification("Boton info", "info", 1000);
  // };


  // const [loader, setLoader] =  useState(false);


  //  const  handlerClick = () => {
  //   setLoader(true);

  //   setTimeout(() => {
  //     setLoader(false);
  //   }, 3000);
  // }

  // const handlerNot = () => {
  //   notification("hola", "success")
  // }

const [properties, useProperties] = useState([])


const handleClick = async () => {
  const response = await getProperties();
  console.log(response)

}


  return (
    <>
    <div>
      {/* <MiButton text={"llamar enpoint"} click={handleClick}/> */}
      <button onClick={handleClick}>llamar enpoint</button>
    </div>

      {/* <div>{Login()}</div> */}
      {/* <div className="Container">
          <Card title={"Search engine optimization"} icon={<PiArrowCircleUpRightFill size={20} />} flecha={"#b9ff66"} text={"Learn more"} image={"/img/1.png"} color="gray" background="#B9FF66"/>
          <Card title={"Pay-per-click advertising"}  icon={<PiArrowCircleUpRightFill size={20} />} text={"Learn more"} image={"/img/2.png"} color="green" background="#F3F3F3"/>
          <Card title={"Social Media Marketing"} icon={<PiArrowCircleUpRightFill size={20} color="white"/>} text={"Learn more"} image={"/img/3.png"} color="blue" background="#F3F3F3" colorText={"#F3F3F3"}/>
          <Card title={"Email Marketing"} icon={<PiArrowCircleUpRightFill size={20} />} text={"Learn more"} flecha={"#b9ff66"} image={"/img/4.png"} color="gray" background="#B9FF66"/>
          <Card title={"Content Creation"}  icon={<PiArrowCircleUpRightFill size={20} />} text={"Learn more"} image={"/img/5.png"} color="green" background="#F3F3F3"/>
          <Card title={"Analytics and Tracking"} BadgeComponent={<Badge label="Disponible" status="success" icon={<CgCheckO />} />} icon={<PiArrowCircleUpRightFill size={20} color="white"/>} text={"Learn more"} image={"/img/6.png"} color="blue" background="#F3F3F3" colorText={"#F3F3F3"}/>
      </div>         */}
  

      {/* <div className="container "> */}


        {/* <button id="success" className="miButton" onClick={handleClickSucces}>
          Success!
        </button>

        <button id="error" className="miButton" onClick={handleClickError}>
          Error!
        </button>

        <button id="warning" className="miButton" onClick={handleClickWarning}>
          Warning!
        </button>

        <button id="info" className="miButton" onClick={handleClickInfo}>
          Info!
        </button> */}

          {/* <div className="flex gap-2">
            <Badge label="Disponible" status="success" icon={<CgCheckO />} />
            <Badge label="Agotado" status="warning" icon={<CgCloseO />}/>
            <Badge label="Nuevo" status="info" icon={<CgInfo />}/>
            <Badge label="Neutro" status="neutral" />
          </div>

        <div className="flex gap-2">
          <MiButton text={"cancelar"} letfIcon={"left"} rightIcon={"right"} variant="danger" size="lg" />
          <MiButton text={"guardar"} letfIcon={"left"} rightIcon={"right"} click={() => notification("un texto", "success")} variant="primary" size="md"/>
          <MiButton text={"siguiente"} letfIcon={"left"} rightIcon={"right"} click={handlerClick} loading={loader} variant="secondary" size="sm"/>
        </div>

         <ToastContainer /> */}
        {/* <div>
        {
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
      {/* </div> */}
    </>
  );
}

// const [state, setState] = useState(false);

// const handClick = () => {
//   setState(!state);
// };
