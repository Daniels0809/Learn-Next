import { createProperty } from "@/services/properties";
import { useRouter } from "next/router";
import { useState } from "react";

const Dashboard = () => {
  const [inputName, setInputName] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputImg, setInputImg] = useState("");

  // const onChangeName = (e) => {
  //   console.log(e.target.value);
  //   setInputName(e.target.value);
  //   setInputValue(e.target.value);
  //   setInputImg(e.target.value);
  // };

  const handleSave = () => {
    createProperty(inputName, Number(inputValue), inputImg);
  };

  const router = useRouter();
  console.log(router.route);

  if (router.route == "/dashboard") {
    console.log("estas en el dashboard");
  }

    const handleEdit = () => {
    router.push("/editProp");
  };


  const goToBack = () => {
    router.back();
  };

  return (
    <>
      <div>
        <label htmlFor="">Nombre</label>
        
        <input
          onChange={(e) => {
            setInputName(e.target.value);
          }}
        />
        <br />

        <label htmlFor="">Valor</label>
        <input
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />{" "}
        <br />

        <label htmlFor="">Imagen</label>
        <input
          onChange={(e) => {
            setInputImg(e.target.value);
          }}
        />
      </div>


      <button className="miButton bg-blue-400" onClick={goToBack}>
        Regresar
      </button>
      <button className="miButton bg-blue-400" onClick={handleEdit}>
        Edit
      </button>
      <button className="miButton bg-blue-400" onClick={handleSave}>
        Guardar
      </button>
    </>
  );
};

export default Dashboard;
