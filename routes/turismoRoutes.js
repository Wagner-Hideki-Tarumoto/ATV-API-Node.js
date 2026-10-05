import express from "express";
import controller from "../controllers/turismoController.js";

const router = express.Router();

router.get("/", controller.getAllTurismo);
router.post("/", controller.createTurismo);
router.get("/:id", controller.getOneTurismo);
router.put("/:id", controller.updateTurismo);
router.delete("/:id", controller.deleteTurismo);

export default router;