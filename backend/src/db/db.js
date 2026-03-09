import mongoose from "mongoose";
import { Book } from "../models/books.js";
import booksData from "./data.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB conectado: ${conn.connection.host}`);

    const count = await Book.countDocuments();
    if (count === 0) {
      // Cargar datos base de /data.js
      console.log("La base de datos está vacía. Cargando datos iniciales");
      const cleanedBooks = booksData.map(({ id, ...rest }) => rest);
      await Book.insertMany(cleanedBooks);
      console.log("Datos base cargados");
    }
  } catch (error) {
    console.error("Error conectando a MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
