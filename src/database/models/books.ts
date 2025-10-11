import { Schema, model, Model } from "mongoose";


const booksSchema = new Schema({
    idBook:{
        type: Number
    },
    title: {
        type: String,
        // required: [true, "The name is required"],
    },
    authorId: {
        type: Number
    },
    category: {
        type: String,
    },
    publishedYear: {
        type: Number,
    },
    availableCopies: {
        type: Number
    },
    img: {
        type: String
    },
    createdAt: {
        type: Date
    }

});

// Utiliza un patrón singleton para garantizar que solo se compile una instancia del modelo
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let Books: Model<any>;
try {
    // Intenta compilar el modelo solo una vez
    Books = model("books");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
} catch (error) {
    // Si el modelo ya está compilado, úsalo
    Books = model("books", booksSchema);
}

export default Books;