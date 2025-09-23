
interface MiButtonProps {
    text:string,
    icon:string
}


export const MiButton = ({text, icon}:MiButtonProps) => {

    const handleClick = () => {
        console.log("Se hizo click en el boton del componente")
    }


  return (
  <button onClick={handleClick} className="components--button">
    <div>{text}</div>
    <div>{icon}</div>
    </button>
  )
};

//Pasar una funcion como prop y al otro ejecutarla dentro del componente