import { useState } from "react";
import { useRouter } from "next/router";
import { usuarios } from "@/helpers/utils";


const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");


  const router = useRouter();

  const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleChangeEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleClick = () => {
    if (user == "" || password == "" || email == "") {
      
      alert("Debe ingresar usuario, contraseña y el email");
    }

    const userFound = usuarios.find((item) => item.name == user && item.password == password && item.email == email);

    if (userFound) {
      router.push("dashboard");
    }else{
      setPassword("");
      setUser("");
      setEmail("");
      alert("usuario, contraseña o email incorretos")
      
    }

    // if (userFound?.password == password && userFound?.email == email) {
    //   router.push("/dashboard");
    // }

    console.log(userFound);
  };

  // const [user, setUser] = useState("");
  // const [password, setPassword] = useState("");

  // const handleChangeUser = (e:React.ChangeEvent<HTMLInputElement>) => {
  //   setUser(e.target.value);
  // };

  // const handleChangePassword = (e:React.ChangeEvent<HTMLInputElement>) => {
  //   setPassword(e.target.value);
  // };

  // console.log(user);

  // const router = useRouter();

  // const handlClick = () => {
  //   console.log("se hizo click", user, password);
  //   // router.push("/dashboard");
  // };
  // const foundUser = usuarios.find(
  //   (u) => u.name === user && u.password === password
  // );

  // if (foundUser) {
  //   console.log("Login exitoso", foundUser.name);
  //   router.push("./dashboard");
  // } else {
  //   console.log("Credenciales incorrectas");
  // }

  return (
    <>
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-400">
          Mi app
        </h1>
        <h3 className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          Ingresa usuario y contraseña
        </h3>
      </div>

      <div className="login">
        <label>Ingresa tu usuario</label>
        <input
          /*value para control*/ value={user}
          onChange={handleChangeUser}
          type="text"
        />
        <br />
        <label>Ingresa tu contraseña</label>
        <input
          value={password}
          onChange={handleChangePassword}
          type="password"
        />
        <br />
        <label>Ingresa tu Correo</label>
        <input value={email} onChange={handleChangeEmail} type="email"></input>

        <button className="bg-blue-700 miButton" onClick={handleClick}>
          Ingresar
        </button>
      </div>
    </>
  );
};

export default Login;

// const userFound = usuarios.find(e) => {
//  setUser(e.target.value)
// };

// const [state, setState] = useState(false);

// const handleClick = () => {
//   setState(!state);
// };

// import { Car, CC } from "@/dto";
// import toUpperCaseLetters from "@/helpers/capitalizar";
// import { sumar, PI } from "@/helpers/utils";
// import { multiplicar, restar } from "@/helpers/utils";
// // import React, { useState } from "react";
// import { motos } from "@/helpers/utils";
// import { type } from '../../.next/types/routes';

{
  /* 
      <button onClick={handleClick} className="bg-blue-700 miButton">Mostrar/Ocultar Motos</button>
        {state && (
        motos?.map((Moto, index) => (
            <div key={index}>
            <div className="bg-blue-700 moto">{Moto.name}</div>
            <div className="bg-blue-700 moto">{Moto.year}</div>
            </div>
        ))
    )} */
}

// const car1: Car = {
//   motor: "kumis",
//   color: "gris",
//   marca: "ford",
//   cc: 3200,
// };

// const { marca: marchini, motor } = car1;

// console.log(marchini);
// console.log(motor);

// const micc: CC = 12231243;
// console.log(micc);

// const [result3, setResult3] = useState(0);

// const a = 2;
// const b = 10;

// const name = "estaban";

// const result = sumar(a, b);
// const result2 = multiplicar(a, PI);
// const result3 = restar(a, b);
// const result4 = toUpperCaseLetters(name);

// console.log(result);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(toLowerCaseLetters(name));

// const Moto:Moto = {
// name: "Yamaha MT-09",
// year: 2026
// }

// console.log(Moto);
