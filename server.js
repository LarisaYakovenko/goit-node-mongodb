import mongoose from "mongoose";

import app from "./app"

const DB_HOST = "mongodb+srv://YaLorik:F1rEEOp8bBVxvRw3@cluster0.9ht8ich.mongodb.net/db-contacts?retryWrites=true&w=majority"

mongoose.connect(DB_HOST)
  .then(() => {
  console.log('Database connection successful');
}).catch((error) => {
  console.log(error.message);
  process.exit(1);
})