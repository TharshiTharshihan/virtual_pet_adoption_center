import mongoose from "mongoose";

const petSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    species: {
      type: String,
      required: true,
      enum: ["Dog", "Cat", "Parrot", "Rabbit", "Pigeon", "Other"],
    },
    age: { type: Number, required: true, min: 0 },
    personality: { type: String, required: true },
    mood: { type: String, default: "Neutral" },
    adopted: { type: Boolean, default: false },
    adoption_date: { type: Date, default: null },
  },
  {
    timestamps: true,
  }
);

const PetModel = mongoose.model("Pet", petSchema);

export default PetModel;
