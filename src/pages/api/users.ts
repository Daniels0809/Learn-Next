import dbConnection from "@/lib/dbconection";
import type { NextApiRequest, NextApiResponse } from "next";
import Users from '../../database/models/users';

type Users = {
  name: string;
  data?: Error;
};

interface User {
  ok: boolean;
  message?: string;
  username?: string;
  password?: string;
  role?: string;
  createdAt: string;
  data?: User[]; // Added data property to the interface
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnection();

  try {
    //GET
    if (req.method === "GET") {
      const data = await Users.find();

      console.log(data);
      res.status(200).json({
        ok: true,
        data: data as Users[],
      });
    }

    //CREATE
    if (req.method === "POST") {
      const {
        username,
        password,
        role,
        createdAt,
      } = req.body;

      const newUser = new Users({
        username,
        password,
        role,
        createdAt,
      });

      const savedUser = await newUser.save();

      console.log(savedUser);
      return res.status(201).json({
        ok: true,
        message: "property saved",
        createId: savedUser._id,
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
        const deleted = await Users.findByIdAndDelete(id);
        // const deleted = await Authors.findOneAndDelete({authorId : Number(authorId)});

        if (!deleted) {
          return res.status(404).json({ ok: false, message: "Not found" });
        }

        return res.status(200).json({
          ok: true,
          message: `User deleted`,
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
        username,
        password,
        role,
        createdAt,
      } = req.body;

      try {
        const userUpdate = await Users.findByIdAndUpdate(
          _id,
          {
        username,
        password,
        role,
        createdAt,
          },
          { new: true }
        );
        console.log(userUpdate);

        return res
          .status(200)
          .json({ ok: true, message: "User update", updatedId: _id });
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
