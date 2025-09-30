// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from "next";
import dbConnection from '@/lib/dbconection';
import Properties from '../../database/models/properties';


// type Users = {
//   name: string;
//   age:number;
// };

// type UsersResponse = {
//   users : Users[]
// }

// export interface user{
//     name:string;
//     age:number;
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<UsersResponse>,
// ) {


    
// console.log("consele.log del lado del back")

//   res.status(200).json({ properties: "funciona" });

  
// }


import type { NextApiRequest, NextApiResponse } from "next";

type Properties = {
  name: string;
  data?: Error;
};

interface Property {
  _id: string;
  name: string;
  value: number;
  img?: string;
}



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Property>,
) {



  try {
 
  if(req.method === 'GET'){

    dbConnection();
    const data = await Properties.find();
    console.log("codigo de GET")
    console.log(data)
    res.status(200).json({ data: data});
  }

    if(req.method === 'POST'){
    console.log("codigo de POST")
    res.status(200).json({ _id: "" ,name: "funciona el POST", value: 0, img: "" });
  }

      if(req.method === 'PUT'){
    console.log("codigo de PUT")
    res.status(200).json({ _id: "funciona el PUT", name: "", value: 0, img: "" });
  }

      if(req.method === 'DELETE'){
    console.log("codigo de DELETE")
    res.status(200).json({ name: "funciona el DELETE", _id: "", value: 0, img: "" });
  }

}
  catch (err) {
    res.status(500).json({ _id: "error del servidor", name: "", value: 0, img: "" });
 }

}
