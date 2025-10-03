import { editProperty } from "@/services/properties";
import { useRouter } from "next/router";
import { useState } from "react";

const EditProp = (id:string) => {
  
  const [inputName, setInputName] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputImg, setInputImg] = useState("");
  const router = useRouter();


  const handleSave = async () => {
      await editProperty(id, inputName, Number(inputValue), inputImg);


  if (router.route == "/dashboard") {
    console.log("estas en el dashboard");
  }
}
  return (
    <>
      <div>
        <div>Edit Property</div>
        <label htmlFor="">Nombre</label>
        <input
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
            setInputName(e.target.value);
          }}
        />
        <br />
        <label htmlFor="">Valor</label>
        <input
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
            setInputValue(e.target.value);
          }}
        />{" "}
        <label htmlFor="">Imagen</label>
        <input
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
            setInputImg(e.target.value);
          }}
        />
      </div>

      <button className="miButton bg-blue-400" onClick={handleSave}>
        Guardar
      </button>
    </>
  );
};

export default EditProp;
