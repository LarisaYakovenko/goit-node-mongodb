import express from "express";
import logger from "morgan";
import cors from "cors";
import 'dotenv/config';
import mongoose from "mongoose";


import contactsRouter from "./routes/api/contactsRouter.js";

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger))
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

const  {DB_HOST, PORT = 3002}  = process.env;

mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log('Database connection successful');
    })
  }).catch((error) => {
    console.log(error.message);
    process.exit(1);
  })

export default app;
