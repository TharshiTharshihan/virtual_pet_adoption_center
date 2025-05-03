import app from "./app.js";
import cors from "cors";
import express from "express";
import PetModel from "./models/petModel.js";
import db from "./db.js";
import petRoutes from "./routes/petRoute.js";
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

app.use("/api/pets", petRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
