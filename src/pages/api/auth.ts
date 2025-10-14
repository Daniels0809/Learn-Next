// src/pages/api/users.ts
import dbConnection from "@/lib/dbconection";
import Users from "@/database/models/auth"; // 👈 asegúrate de tener el modelo Users creado

import type { NextApiRequest, NextApiResponse } from "next";

interface User {
  _id?: string;
  name: string;
  password: string;
  role: string;
  createdAt: string;
}

interface ApiResponse {
  ok: boolean;
  message?: string;
  data?: User[];
  user?: User;
  createId?: string;
  updatedId?: string;
  deletedId?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  await dbConnection();

  try {
    // =============================
    // 🔹 GET USERS (All or by email/password)
    // =============================
    if (req.method === "GET") {
      const { username, password } = req.query;

      // Login (find by email + password)
      if (username && password) {
        const user = await Users.findOne({ username, password });

        if (!user) {
          return res
            .status(401)
            .json({ ok: false, message: "Credenciales incorrectas" });
        }

        return res.status(200).json({ ok: true, user });
      }

      // Get all users
      const data = await Users.find();
      return res.status(200).json({ ok: true, data });
    }

    // =============================
    // 🔹 CREATE USER
    // =============================
    if (req.method === "POST") {
      const { username, password, role, createdAt } = req.body;

      const newUser = new Users({
        username,
        password,
        role,
        createdAt,
      });

      const savedUser = await newUser.save();

      return res.status(201).json({
        ok: true,
        message: "User created successfully",
        createId: savedUser._id,
      });
    }

    // =============================
    // 🔹 UPDATE USER
    // =============================
    if (req.method === "PUT") {
      const { _id, name, email, password, role, isActive } = req.body;

      if (!_id)
        return res
          .status(400)
          .json({ ok: false, message: "Missing user ID (_id)" });

      const updatedUser = await Users.findByIdAndUpdate(
        _id,
        { name, email, password, role, isActive },
        { new: true }
      );

      if (!updatedUser)
        return res.status(404).json({ ok: false, message: "User not found" });

      return res.status(200).json({
        ok: true,
        message: "User updated successfully",
        updatedId: _id,
      });
    }

    // =============================
    // 🔹 DELETE USER
    // =============================
    if (req.method === "DELETE") {
      const { id } = req.query;

      if (!id || typeof id !== "string") {
        return res
          .status(400)
          .json({ ok: false, message: "Missing or invalid id" });
      }

      const deleted = await Users.findByIdAndDelete(id);

      if (!deleted)
        return res.status(404).json({ ok: false, message: "User not found" });

      return res.status(200).json({
        ok: true,
        message: "User deleted successfully",
        deletedId: id,
      });
    }

    // =============================
    // 🔹 DEFAULT RESPONSE
    // =============================
    res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
    return res.status(405).json({
      ok: false,
      message: `Method ${req.method} not allowed`,
    });
  } catch (err) {
    console.error("❌ API Error:", err);
    return res
      .status(500)
      .json({ ok: false, message: "Internal server error" });
  }
}
