import React, { JSX } from "react";
import Image from "next/image";
import { MiButton } from "../Button";

interface CardProps {
  title: string;
  description: string;
  image: string;
  color: string;
  background?: string;
  colorText?: string;
  BadgeComponent?: JSX.Element;
  children?: React.ReactNode;
}

export const Card = ({
  title,
  description,
  image,
  color,
  background,
  colorText,
  BadgeComponent,
  children,
}: CardProps) => {
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

      <div>{children}</div>
      <div className="card__leftSide">
        <div
          className="card__leftSide--title"
          style={{ backgroundColor: background }}
        >
          {title}
        </div>

        <div className="card__leftSide--link">
          <div className="card__leftSide--text" style={{ color: colorText }}>
            {description}
          </div>
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

        <div>
          <MiButton text="button" icon={"x"} />
        </div>
      </div>
    </div>
  );
};
