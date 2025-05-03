// backend/controllers/petController.js
import PetModel from "../models/petModel.js";

export const createPet = async (req, res) => {
  const pet = req.body;

  if (!pet.name || !pet.species || !pet.age || !pet.personality) {
    return res.status(400).json({ message: "Fill all required fields" });
  }

  const newPet = new PetModel(pet);

  try {
    await newPet.save();
    res.status(201).json({ status: "success", data: newPet });
  } catch (err) {
    console.error("Error in pet:", err.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getAllPet = async (req, res) => {
  try {
    const pets = await PetModel.find({});
    res.status(200).json({ status: "success", data: pets });
  } catch (err) {
    console.error("Error in pets", err.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getOnePet = async (req, res) => {
  const { id } = req.params;

  try {
    const pet = await PetModel.findById(id);
    if (!pet) {
      return res
        .status(404)
        .json({ success: false, message: "pet not found." });
    }
    res.status(200).json({ success: true, data: pet });
  } catch (error) {
    console.error("Error fetching pet:", error.message);
    res.status(500).json({ success: false, message: "Server error." });
  }
};

export const updatePet = async (req, res) => {
  const { id } = req.params;
  const pet = req.body;

  try {
    const updatedpets = await PetModel.findByIdAndUpdate(id, pet, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedpets });
  } catch (err) {
    console.error("Error in update the pet", err.message);
    res.status(500).json({ success: false, message: "server error" });
  }
};

export const deletePet = async (req, res) => {
  const { id } = req.params;

  try {
    await PetModel.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Deleted" });
  } catch (err) {
    console.error("Error in  delete pet", err.message);
    res.status(500).json({ success: false, message: " error" });
  }
};
