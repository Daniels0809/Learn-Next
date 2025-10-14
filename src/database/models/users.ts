import { Schema, model, Model } from "mongoose";


const userSchema = new Schema({
    username:{
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: String
    },
    createdAt:{
        type: String
    }
});

// Utiliza un patrón singleton para garantizar que solo se compile una instancia del modelo
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let Users: Model<any>;
try {
    // Intenta compilar el modelo solo una vez
    Users = model("users");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
} catch (error) {
    // Si el modelo ya está compilado, úsalo
    Users = model("users", userSchema);
}

export default Users;