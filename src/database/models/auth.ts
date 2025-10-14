import mongoose, { Schema, models, model } from "mongoose";

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "user"], required: true },
  createdAt: { type: String, default: new Date().toISOString() },
});

const Users = models.Users || model("Users", userSchema);

export default Users;
