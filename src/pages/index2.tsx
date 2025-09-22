  const [userList, setUserList] = useState<user[]>([]);

  const handleClick = async () => {
    console.log("hola desde el front");

    const userClass = new userServices();

    const users = userClass.getUsers();

    const response = await users;
    const data = await response.json();

    console.log(data);
    setUserList(data.users);

    // users
    //   .then((data) => data.json())
    //   .then((response) => {
    //     console.log(response.users);
    //     setUserList(response.users)
    //   });

    //llamar un metodo de mi clase user que es un servicio
  };

  // function identify<T>(parametro: T): T {
  //   return parametro;
  // }

  // const result = identify<number>(15);
  // const result2 = identify<string>("A");
  // const result3 = identify<boolean>(true);

  // console.log(result);
  // console.log(result2);
  // console.log(result3);

  // const arrayNum = [1, 2, 3, 4, 5, 6, 7];
  // const arrayStr = ["A", "B", "C", "D", "E", "F"];
  // const arrayBln = [true, false];

  // const returnFirstElement = <T,>(array: T[]): T[] => {
  //   array.forEach((element) => console.log(element))
  //   console.log(array[array.length -1,1])
  //   const reversed = array.reverse();
  //   return reversed;
  // };
  // const resul = returnFirstElement<string>(arrayStr);
  // const resul2 = returnFirstElement<number>(arrayNum);
  // const resul3 = returnFirstElement<boolean>(arrayBln);

  // console.log(resul);
  // console.log(resul2);
  // console.log(resul3);

  

  // const wrapIntripleArray = <T,>(i:T):T[] =>{
  //   const agregacion = Array(3).fill(i)
  //   return agregacion
  // }

  // const tripleNumber = wrapIntripleArray(5)
  // console.log(tripleNumber);


















































//   class Vehiculo {
//     name: string;
//     brand: string;
//     plate: string;
//     color: string;

//     constructor(name: string, brand: string, plate: string, color: string) {
//       this.name = name;
//       this.brand = brand;
//       this.plate = plate;
//       this.color = color;
//     }
//     Name_Brand() {
//       return `Vehiculo ${this.name},\n
//     Placa: ${this.brand},
//     `;
//     }

//     Plate_Color() {
//       return `Placa: ${this.plate},\n
//     Color: ${this.color}`;
//     }
//   }

//   const vehiculos: Vehiculo[] = [
//     new Vehiculo("Versys", "Kawasaki", "LOK06H", "VERDE"),
//     new Vehiculo("Panigale", "Ducati", "JKH98E", "ROJO"),
//   ];



//   const showVehiculos(vehiculos)= {
//     return `Vehiculo: ${this.name},\n
//     Placa: ${this.brand},\n
//     Color: ${this.color}`;
//   };

      {/* <div>
        <button onClick={handClick} className="bg-blue-700 miButton">
          Mostrar vehiculos
        </button> 
        {state && (
          <ul>
            {vehiculos.map((vehiculo, index) => (
              <li className="bg-blue-700 vehiculos" key={index}>
                {`Vehiculo: ${vehiculo.name}, Marca: ${vehiculo.brand}, Placa: ${vehiculo.plate}, Color: ${vehiculo.color}`}
              </li>
            ))}
          </ul>
        )}

      </div> */}

//   interface Products {
//     name: string;
//     price: number;
//     description: string;
//     amount: number;
//     isActive: boolean;
//     img?: string
//   }

//   class Coder{
//     name: string;
//     age:number;
//     email: string;

//     constructor (name: string, age: number, email: string){
//       this.name = name;
//       this.age = age;
//       this.email = email;
//     }
//     saludar(){
//       return `Hola soy ${this.name}`;
//     }
//   }

//     const coder1 = new Coder("Daniel", 22, "correo@correo.com");
//     const coder2 = new Coder("Alejandro", 20, "alejo@example.com");

//     console.log(coder1.email);
//     console.log(coder1.name);

//     console.log(coder2.email);
//     console.log(coder2.name);

//   return (
//     <div>
//       <div>Hola mundo</div>
//       <div>Hola mundo 2</div>
//       <button onClick={handleClick} className="bg-blue-700 miButton">
//         cambiar estado
//       </button>
//       <div>
//         {state && (
//           <ul className="list">
//             {products?.map((product, index) => (
//               <li className="list-item" key={index}>
//                 <div>Nombre de la moto es:{product.name}</div>
//                 <div>El valor es:{product.price}</div>
//                 <div className="list-isActive">
//                   Disponible: {product.isActive ? <CircleCheckBig /> : <Ban />}
//                 </div>
//                 <div>la cantidad disponible es: {product.amount}</div>
//                 {product.img && (
//                   <img src={product.img} alt={product.name}></img>
//                 )}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );


//   const [state, setState] = useState(false);

//   const handleClick = () => {
//     setState(!state);
//   };

//   const products: Products[] = [
//     {
//       name: "moto",
//       price: 3000,
//       description: "yamaha mt-09",
//       amount: 10,
//       isActive: true,
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQSkw2nEjil00Y_Vuw3j9JiDtAcjzol3Mfkw&s"
//     },
//     {
//       name: "moto2",
//       price: 5000,
//       description: "yamaha mt-07",
//       amount: 5,
//       isActive: false,
//       img: "https://cdn.pixabay.com/photo/2023/03/16/08/42/camping-7856198_640.jpg"
//     },
//     {
//       name: "moto3",
//       price: 7000,
//       description: "yamaha la 80",
//       amount: 8,
//       isActive: false,
//       img: "https://i.blogs.es/c7b68e/chatgpt-studio-ghibli-portada/500_333.jpeg"
//     },
//     {
//       name: "moto4",
//       price: 300,
//       description: "yamaha crypton",
//       amount: 2,
//       isActive: false,
//     },
//     {
//       name: "moto5",
//       price: 250,
//       description: "yamaha szr",
//       amount: 100,
//       isActive: true,
//     },
//     {
//       name: "moto6",
//       price: 2344,
//       description: "yamaha dt-125",
//       amount: 17,
//       isActive: true,
//     },
//   ];

//   console.log(products);

// }

// import { useState } from "react";

// type values = number;

// export default function Home() {

//   function fizzBuzz(limit: number): void {
//     for (let i = 1; i <= limit; i++) {
//       if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//       } else if (i % 3 === 0) {
//         console.log("Fizz");
//       } else if (i % 5 === 0) {
//         console.log("Buzz");
//       } else {
//         console.log(i);
//       }
//     }
//   }

//   fizzBuzz(200);

//   const [result, setResult] = useState(0);

//   const handleClick = () => {
//     const laSuma = sumar(10, 50);

//     setResult(laSuma);
//   };

//   const sumar = (a: values, b: values): values => {
//     return a + b;
//   };

// console.log(result);

//   return (
//     <div>
//       <div>Hola mundo</div>
//       <div>Hola mundo2</div>
//       <button onClick={handleClick} className="bg-blue-700 miButton">
//         Sumar y mostrar
//       </button>
//       <div>{JSON.stringify(result)}</div>
//     </div>
//   );

// {product.img && (<img src={product.img} alt={product.name}/>
// )}

// {product.img && (<Image src={product.img} alt={product.name} width={200} height={200} />
// )}
// }

// export default function Home() {
//   const number1 = 10;
//   const number2 = 20;

//   const result = number1 + number2;
//   console.log(result);

//   return result;
