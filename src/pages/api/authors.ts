import dbConnection from "@/lib/dbconection";
import Authors from "../../database/models/authors";


import type { NextApiRequest, NextApiResponse } from "next";

type Authors = {
  name: string;
  data?: Error;
};

interface Author {
  ok: boolean;
  message?: string;
  authorId?: number;
  name?: string;
  nationality?: string;
  birthYear?: number;
  isActive?: boolean;
  data?: Author[]; // Added data property to the interface
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
   
  dbConnection();

  try {
    if (req.method === "GET") {
      const data = await Authors.find();

      console.log(data);
      res.status(200).json({
        ok: true,
        data: data as Author[],
      });
    }

    if (req.method === "POST") {
      const { name, value, img } = req.body;

      const newAuthor = new Authors({ name, value, img });

      const savedAuthor = await newAuthor.save();

      console.log(savedAuthor);
      return res.status(201).json({
        ok: true,
        message: "property saved",
        createId: savedAuthor._id,
      });
    }
    if (req.method === "DELETE") {
      const { id } = req.query;
      console.log(id);
      const authorDelete = await Authors.findByIdAndDelete(id);
      console.log(authorDelete);
      return res
        .status(200)
        .json({ ok: true, message: `author deleted`, deletedId: `${id}` });
    }
    if (req.method === "PUT") {
      const { id, name, value, img } = req.body;

      try {
        const authorUpdate = await Authors.findByIdAndUpdate(id, {
          name,
          value,
          img,

        }, {new:true});
        console.log(authorUpdate);
        
        return res
        .status(200)
        .json({ ok: true, message: "author update", updatedId: id });
      } catch {
        res.status(400)
      }

      
    }
  } catch (err) {
    res.status(500).json({ name: "fallo" });
    console.log(err);
  }
}
