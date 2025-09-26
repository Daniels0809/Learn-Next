import React, { JSX } from "react";
import Image from "next/image";


interface CardProps {
  title: string;
  text: string;
  icon: JSX.Element;
  image: string;
  color: string;
  background: string;
  colorText?: string;
  flecha?: string;
  BadgeComponent?: JSX.Element;
}

export const Card = ({ title, text, icon, image, color, background, colorText, flecha, BadgeComponent }: CardProps) => {
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
          {BadgeComponent}

        <div className="card__leftSide">
          <div className="card__leftSide--title"  style={{backgroundColor : background} }>{title}</div>

          <div className="card__leftSide--link">
            <div className="card__leftSide--icon" style={{backgroundColor : flecha}}>{icon}</div>
            <div className="card__leftSide--text" style={{color: colorText}} >{text}</div>
          </div>
        </div>

        <div className="card__rightSide">
          <Image
            className="card__rightSide--image"
            alt="asd"
            width={200}
            height={200}
            src={image}
          />
        </div>
      </div>
  );
};
