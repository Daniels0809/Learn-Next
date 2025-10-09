import { Schema, model, Model } from "mongoose";

const authorsSchema = new Schema({
    authorId:{
        type: Number
    },
    name: {
        type: String,
        // required: [true, "The name is required"],
    },
    nationality: {
        type: String,
    },
    birthYear: {
        type: Number,
    },
    isActive: {
        type: Boolean
    }

});

// Utiliza un patrón singleton para garantizar que solo se compile una instancia del modelo
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let Authors: Model<any>;
try {
    // Intenta compilar el modelo solo una vez
    Authors = model("authors");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
} catch (error) {
    // Si el modelo ya está compilado, úsalo
    Authors = model("authors", authorsSchema);
}

export default Authors;