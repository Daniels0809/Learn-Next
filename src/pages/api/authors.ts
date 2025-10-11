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

    //GET
    if (req.method === "GET") {
      const data = await Authors.find();

      console.log(data);
      res.status(200).json({
        ok: true,
        data: data as Author[],
      });
    }

    //CREATE
    if (req.method === "POST") {
      const { authorId,name, nationality, birthYear, isActive } = req.body;

      const newAuthor = new Authors({ authorId, name, nationality, birthYear, isActive  });

      const savedAuthor = await newAuthor.save();

      console.log(savedAuthor);
      return res.status(201).json({
        ok: true,
        message: "property saved",
        createId: savedAuthor._id,
      });
    }

    //DELETE
    if (req.method === "DELETE") {
      const { id } = req.query;
      if(!id || typeof id !== "string"){
        return res.status(400).json({ok: false, message: "Missing of invalid id"})
      }

      try{
        const deleted = await Authors.findByIdAndDelete(id);
        // const deleted = await Authors.findOneAndDelete({authorId : Number(authorId)});

        if(!deleted){
          return res.status(404).json({ok: false, message: "Not found"});
        }

        return res.status(200).json({
          ok:true,
          message: `Author deleted`,
          deletedId: id
        });
      }catch (error){
        console.error("DELETE error:", error);
        return res.status(500).json({ok: false, message: "Delete failed"});
      }
    }


    //UPDATE
    if (req.method === "PUT") {
      const { _id, name, nationality, birthYear, isActive } = req.body;

      try {
        const authorUpdate = await Authors.findByIdAndUpdate(_id, {
          name,
          nationality,
          birthYear,
          isActive

        }, {new:true});
        console.log(authorUpdate);
        
        return res
        .status(200)
        .json({ ok: true, message: "author update", updatedId: _id });
      } catch {
        res.status(400)
      }

      
    }
  } catch (err) {
    res.status(500).json({ name: "fallo" });
    console.log(err);
  }
}
