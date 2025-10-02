// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from "next";
import dbConnection from "@/lib/dbconection";
import Properties from "../../database/models/properties";

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
  ok: boolean;
  message?: string;
  _id?: string;
  createId?: string;
  name?: string;
  value?: number;
  img?: string;
  data?: Property[]; // Added data property to the interface
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
   
  dbConnection();

  try {
    if (req.method === "GET") {
      const data = await Properties.find();

      console.log(data);
      res.status(200).json({
        ok: true,
        miInfo: data as Property[],
      });
    }

    if (req.method === "POST") {
      const { name, value, img } = req.body;

      const newProperty = new Properties({ name, value, img });

      const savedProperty = await newProperty.save();

      console.log(savedProperty);
      return res.status(201).json({
        ok: true,
        message: "property saved",
        createId: savedProperty._id,
      });
    }
    if (req.method === "DELETE") {
      const { id } = req.query;
      console.log(id);
      const propertyDelete = await Properties.findByIdAndDelete(id);
      console.log(propertyDelete);
      return res
        .status(200)
        .json({ ok: true, message: `Property deletec`, deletedId: `${id}` });
    }
    if (req.method === "PUT") {
      const { id, name, value, img } = req.body;

      try {
        const propertyUpdate = await Properties.findByIdAndUpdate(id, {
          name,
          value,
          img,

        }, {new:true});
        console.log(propertyUpdate);
        
        return res
        .status(200)
        .json({ ok: true, message: "property update", updatedId: id });
      } catch {
        res.status(400)
      }

      
    }
  } catch (err) {
    res.status(500).json({ name: "fallo" });
    console.log(err);
  }
}
