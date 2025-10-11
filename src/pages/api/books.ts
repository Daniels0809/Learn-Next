import dbConnection from "@/lib/dbconection";
import type { NextApiRequest, NextApiResponse } from "next";
import Books from "@/database/models/books";

type Books = {
  name: string;
  data?: Error;
};

interface Book {
  ok: boolean;
  message?: string;
  idBook?: number;
  title?: string;
  authorId?: number;
  category?: string;
  publishedYear?: number;
  availableCopies?: number;
  img?: string;
  createdAt: string;
  data?: Book[]; // Added data property to the interface
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnection();

  try {
    //GET
    if (req.method === "GET") {
      const data = await Books.find();

      console.log(data);
      res.status(200).json({
        ok: true,
        data: data as Book[],
      });
    }

    //CREATE
    if (req.method === "POST") {
      const {
        idBook,
        title,
        authorId,
        category,
        publishedYear,
        availableCopies,
        img,
        createdAt,
      } = req.body;

      const newBook = new Books({
        idBook,
        title,
        authorId,
        category,
        publishedYear,
        availableCopies,
        img,
        createdAt,
      });

      const savedBook = await newBook.save();

      console.log(savedBook);
      return res.status(201).json({
        ok: true,
        message: "property saved",
        createId: savedBook._id,
      });
    }

    //DELETE
    if (req.method === "DELETE") {
      const { id } = req.query;
      if (!id || typeof id !== "string") {
        return res
          .status(400)
          .json({ ok: false, message: "Missing of invalid id" });
      }

      try {
        const deleted = await Books.findByIdAndDelete(id);
        // const deleted = await Authors.findOneAndDelete({authorId : Number(authorId)});

        if (!deleted) {
          return res.status(404).json({ ok: false, message: "Not found" });
        }

        return res.status(200).json({
          ok: true,
          message: `Book deleted`,
          deletedId: id,
        });
      } catch (error) {
        console.error("DELETE error:", error);
        return res.status(500).json({ ok: false, message: "Delete failed" });
      }
    }

    //UPDATE
    if (req.method === "PUT") {
      const {
        _id,
        idBook,
        title,
        authorId,
        category,
        publishedYear,
        availableCopies,
        img,
        createdAt,
      } = req.body;

      try {
        const bookUpdate = await Books.findByIdAndUpdate(
          _id,
          {
            idBook,
            title,
            authorId,
            category,
            publishedYear,
            availableCopies,
            img,
            createdAt,
          },
          { new: true }
        );
        console.log(bookUpdate);

        return res
          .status(200)
          .json({ ok: true, message: "author update", updatedId: _id });
      } catch (error) {
        console.error("PUT error:", error);
        return res
          .status(400)
          .json({ ok: false, message: "Update failed", error });
      }
    }
  } catch (err) {
    res.status(500).json({ name: "fallo" });
    console.log(err);
  }
}
