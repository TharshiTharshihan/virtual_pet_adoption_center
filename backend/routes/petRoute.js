// backend/routes/petRoutes.js
//,getOnePet.adoptPet
import express from "express";
import {
  createPet,
  getAllPet,
  getOnePet,
  updatePet,
  deletePet,
} from "../controllers/petController.js";

const router = express.Router();

router.post("/create", createPet);
router.get("/pets", getAllPet);
router.get("/pet/:id", getOnePet);
router.put("/pet/:id", updatePet);
// router.get("/pet/:id", adoptPet);
router.delete("/pet/:id", deletePet);

export default router;
