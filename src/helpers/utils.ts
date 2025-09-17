
import {Moto, user, Usuario} from "../dto"

const sumar = (prop1:number, prop2:number) => {
    return prop1 + prop2;
}

const multiplicar = (prop1:number, prop2:number) => {
    return prop1 * prop2;
}

const restar = (prop1:number, prop2:number) => {
    return prop1 - prop2;   
}

export const PI:number = 3.1416;

export const users:user[] = [
    {name: "daniel", age: 22},
    {name: "daniel", age: 22},
    {name: "daniel", age: 22},
    {name: "daniel", age: 22},
    {name: "daniel", age: 22},
];






export const motos: Moto[] = [
    { name: "Yamaha MT-07", year: 2021 },
    { name: "Yamaha MT-09", year: 2026},
    { name: "Kawasaki Ninja 400", year: 2022 },
    { name: "Honda CBR500R", year: 2020 },
    { name: "Suzuki GSX250R", year: 2019 },
    { name: "Ducati Monster 821", year: 2023 },
];

export const usuarios: Usuario[] = [
    {name: "daniel", password: "123", email: "daniel@daniel.com"},
    {name: "juan", password: "dsadsadasd", email: "juan@juan.com"},
    {name: "sara", password: "dsasgfdg", email: "sara@sara.com"},
    {name: "ximena", password: "dsadzxc", email: "ximena@ximena.com"},
    {name: "santiago", password: "dsadsadsdfe", email: "santi@santi.com"},
];

export{ sumar,restar,multiplicar };