// backend/routes/petRoutes.js
//,getOnePet.adoptPet
import express from "express";
import {
  createPet,
  getAllPet,
  getOnePet,
  updatePet,
  deletePet,
  filterPet,
} from "../controllers/petController.js";

const router = express.Router();

router.post("/create", createPet);
router.get("/petsAll", getAllPet);
router.get("/pet/:id", getOnePet);
router.put("/pet/:id", updatePet);
router.delete("/pet/:id", deletePet);
router.get("/filterPet", filterPet);

export default router;
