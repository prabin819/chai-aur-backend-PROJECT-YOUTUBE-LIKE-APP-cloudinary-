/*

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

import express from "express";
const app = express();
import "dotenv/config"; //require("dotenv").config({path: './env'})
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port: ${process.env.PORT}`);
    }); //always use async/await or use promise (when using db for any purpose)
  } catch (error) {
    console.log("ERROR: ", error);
    throw error;
  }
})(); //; at the begining to make sure that no error occurs irrespective of the semicolon present at the immediate previous line

*/

import "dotenv/config";
import connectDB from "./db/index.js";

// import dotenv from "dotenv";
// dotenv.config({ path: "./env" });
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      `Server is running at PORT: ${process.env.PORT}`;
    });
  })
  .catch((err) => {
    console.log("MONGODB connection failed !!! ", err);
  });
