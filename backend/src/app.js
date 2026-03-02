import express from "express";
import cors from "cors";
import booksRouter from "./routes/books.js";

const app = express();
app.use(express.json());

const corsOptions = {
  origin: "*",
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/books", booksRouter);

export default app;
