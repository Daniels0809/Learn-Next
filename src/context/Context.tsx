"use client";

import { createContext } from "react";

// 🧩 Interfaz del usuario global
export interface UserLog {
  username: string;
  role: "admin" | "user";
  isActive: boolean;
  createdAt: string;
}

// 🧩 Interfaz del contexto completo
interface MyContextType {
  userLogged: UserLog;
  setUserLogged: React.Dispatch<React.SetStateAction<UserLog>>;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

// 🔹 Contexto global exportado
export const MyContext = createContext<MyContextType>({
  userLogged: {
    username: "",
    role: "user",
    isActive: false,
    createdAt: "",
  },
  setUserLogged: () => {},
  isActive: false,
  setIsActive: () => {},
});
