// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";


type Users = {
  name: string;
  age:number;
};

type UsersResponse = {
  users : Users[]
}

// export interface user{
//     name:string;
//     age:number;
// }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<UsersResponse>,
) {
const users  = [
  {name: "juan", age: 33},
  {name: "juana", age: 32},
  {name: "juano", age: 16},
]

console.log("consele.log del lado del back")

  res.status(200).json({ users });

  
}
