import express from "express";
import { 
  createWorkout, deleteWorkouts, getParticularWorkout, getWorkouts, updateWorkouts 
} from "../controllers/workout.controller.js";

const router = express.Router();

// Get all workout
router.get("/", getWorkouts);

// Get a particular workout
router.get("/:id", getParticularWorkout);

// Post a new workout
router.post("/", createWorkout);

// Delete a particular workout
router.delete("/:id", deleteWorkouts);

// Update a particular workout
router.patch("/:id", updateWorkouts);

export default router;
