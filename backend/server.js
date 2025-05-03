import app from "./app.js";
import cors from "cors";
import express from "express";
require("dotenv").config();
const petModel = require("./models/petModel");
const db = require("./db");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
