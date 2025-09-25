import { JSX } from "react";

interface MiButtonProps {
  text: string;
  icon: string | JSX.Element;
  disabled?: boolean;
  loading?: boolean;
  click?: () => void;
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
}

export const MiButton = ({text,icon,disabled = false, loading = false, click, variant = "primary", size}: MiButtonProps) => {
  

  return (
    <button
      onClick={click}
      className={`components__button ${
        disabled || loading ? "components__button--disabled" : ""
      } ${variant === "secondary" ? "components__button--secondary": variant === "danger" ? "components__button--danger": variant ? "components__button--primary" : ""  }` }

      disabled={disabled || loading}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col gap-2" style={{fontSize: size === "sm" ? "12px" : size === "md" ? "20px" : size === "lg" ? "30px" : "16px"}}>
          {loading ? "Cargando..." : text} 
        </div>

        <div>{icon}</div>
      </div>
    </button>
  );
};

//Pasar una funcion como prop y al otro ejecutarla dentro del componente
