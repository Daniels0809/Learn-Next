import React, { JSX } from "react";
import Image from "next/image";


interface CardProps {
  id: string,
  name: string,
  nationality: string,
  birthYear: number
  title?: string;
  color?: string;
  background?: string;

}

export const CardLibrary = ({ name, nationality, birthYear, title , color, background}: CardProps) => {
  return (
        
      <div
        className={
          color === "green"
            ? "card-green"
            : color === "blue"
            ? "card-blue"
            : color === "gray"
            ? "card-gray"
            : color === "black"
            ? "card-black"
            : "card"
        } 
      >

        <div className="card__leftSide">
          <div className="card__leftSide--title"  style={{backgroundColor : background} }>{title}</div>
          <div>Author: {name}</div>
          <div>Nationality: {nationality} BirthYear: {birthYear}</div>
        </div>
      </div>
  );
};
