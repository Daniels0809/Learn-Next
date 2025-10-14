import mongoose, { Schema, models, model } from "mongoose";

const userSchema = new Schema({
  userId: { type: Number, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "user"], required: true },
  isActive: { type: Boolean, default: true },
  createdAt: { type: String, default: new Date().toISOString() },
});

const Users = models.Users || model("Users", userSchema);

export default Users;
