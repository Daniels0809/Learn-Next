"use client";

import { JSX, useState, useEffect } from "react";
import { MyContext, UserLog } from "./Context";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const Provider = ({ children }: Props) => {
  const [userLogged, setUserLogged] = useState<UserLog>({
    name: "",
    role: "",
    isActive: false,
    date: "",
  });
  const [isActive, setIsActive] = useState(false);
  const [mounted, setMounted] = useState(false); // ✅ clave para evitar hydration error

  useEffect(() => {
    setMounted(true); // ya estamos en el cliente

    try {
      const storedUser = localStorage.getItem("userLogged");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser.name && parsedUser.role) {
          setUserLogged(parsedUser);
          setIsActive(parsedUser.isActive || true);
        }
      }
    } catch (error) {
      console.error("Error reading localStorage:", error);
    }
  }, []);

  // 🔹 Guardar usuario cuando cambia
  useEffect(() => {
    if (userLogged && userLogged.name) {
      localStorage.setItem("userLogged", JSON.stringify(userLogged));
    }
  }, [userLogged]);

  // 🚫 Si aún no estamos montados en el cliente, no renderices nada
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
