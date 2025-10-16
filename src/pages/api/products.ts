import dbConnection from "@/lib/dbconection";
import type { NextApiRequest, NextApiResponse } from "next";
import Products from "../../database/models/products";

type Products = {
  name: string;
  data?: Error;
};

interface Product {
  ok: boolean;
  message?: string;
  sku?: string;
  name?: string;
  brand?: string;
  quantity?: number;
  price?: number;
  isActive?: boolean;
  category?: string;
  imageUrl?: string;
  createdAt?: string;
  data?: Product[]; // Added data property to the interface
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  dbConnection();

  try {
    //GET
    if (req.method === "GET") {
      const data = await Products.find();

      console.log(data);
      res.status(200).json({
        ok: true,
        data: data as Products[],
      });
    }

    //CREATE
    if (req.method === "POST") {
      const {
        sku,
        name,
        brand,
        quantity,
        price,
        isActive,
        category,
        imageUrl,
        createdAt,
      } = req.body;

      const newProduct = new Products({
        sku,
        name,
        brand,
        quantity,
        price,
        isActive,
        category,
        imageUrl,
        createdAt,
      });

      const savedProduct = await newProduct.save();

      console.log(savedProduct);
      return res.status(201).json({
        ok: true,
        message: "property saved",
        createId: savedProduct._id,
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
        const deleted = await Products.findByIdAndDelete(id);
        // const deleted = await Authors.findOneAndDelete({authorId : Number(authorId)});

        if (!deleted) {
          return res.status(404).json({ ok: false, message: "Not found" });
        }

        return res.status(200).json({
          ok: true,
          message: `Author deleted`,
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
        sku,
        name,
        brand,
        queantity,
        price,
        isActive,
        category,
        imageUrl,
        createdAt,
      } = req.body;

      try {
        const prodcutUpdate = await Products.findByIdAndUpdate(
          _id,
          {
            sku,
            name,
            brand,
            queantity,
            price,
            isActive,
            category,
            imageUrl,
            createdAt,
          },
          { new: true }
        );
        console.log(prodcutUpdate);

        return res
          .status(200)
          .json({ ok: true, message: "author update", updatedId: _id });
      } catch {
        res.status(400);
      }
    }
  } catch (err) {
    res.status(500).json({ name: "fallo" });
    console.log(err);
  }
}
