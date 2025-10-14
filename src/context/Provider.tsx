"use client";

import { JSX, useState, useEffect } from "react";
import { MyContext, UserLog } from "./Context";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const Provider = ({ children }: Props) => {
  const [userLogged, setUserLogged] = useState<UserLog>({
    username: "",
    role: "user",
    isActive: false,
    createdAt: "",
  });
  const [isActive, setIsActive] = useState(false);
  const [mounted, setMounted] = useState(false);

  // ✅ Restaurar usuario desde localStorage
  useEffect(() => {
    setMounted(true);
    try {
      const storedUser = localStorage.getItem("userLogged");
      if (storedUser) {
        const parsedUser: UserLog = JSON.parse(storedUser);
        if (parsedUser.username && parsedUser.role) {
          setUserLogged(parsedUser);
          setIsActive(!!parsedUser.isActive);
        }
      }
    } catch (error) {
      console.error("Error leyendo localStorage:", error);
    }
  }, []);

  // 💾 Guardar usuario cuando cambia
  useEffect(() => {
    if (userLogged && userLogged.username) {
      localStorage.setItem("userLogged", JSON.stringify(userLogged));
    }
  }, [userLogged]);

  // 🚫 Evita render hasta montar en cliente
  if (!mounted) return null;

  return (
    <MyContext.Provider
      value={{
        userLogged,
        setUserLogged,
        isActive,
        setIsActive,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
