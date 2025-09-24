import { JSX } from "react";

interface MiButtonProps {
  text: string;
  next: string;
  icon: string | JSX.Element;
}

export const MiButton = ({ text, next, icon }: MiButtonProps) => {
  const handleClick = () => {
    console.log("Se hizo click en el boton del componente");
  };

  return (
    <button onClick={handleClick} className="components--button">
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col gap-2">
          {text} {next}
        </div>

        <div>{icon}</div>
      </div>
    </button>
  );
};

//Pasar una funcion como prop y al otro ejecutarla dentro del componente
