import mongoose from "mongoose";

import app from "./app"

import DB_HOST from "./config.js"

mongoose.connect(DB_HOST)
  .then(() => {
  console.log('Database connection successful');
}).catch((error) => {
  console.log(error.message);
  process.exit(1);
})