const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URI;
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => console.error("MongoDB connection error:", err));
module.exports = mongoose;
