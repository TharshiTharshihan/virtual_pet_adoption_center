const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  fname1: { type: String, require },
  lname1: { type: String, require },
  em: { type: String, require, unique: true },
  pw: { type: String, require },
  img: { type: String, require },
});

const petModel = mongoose.model("pet", petSchema);

module.exports = petModel;
