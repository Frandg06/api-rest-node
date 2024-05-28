import { Router } from "express";
import { workoutsController } from "../../controllers/workouts.controller.js";
import { recordController } from "../../controllers/record.controller.js";

const router = Router();
const {
  getAllWorkouts,
  getWorkoutById,
  createNewWorkout,
  updateWorkout,
  deleteWorkout,
} = workoutsController;
const { getRecordForWorkout } = recordController;

router
  .get("/", getAllWorkouts)
  .get("/:id", getWorkoutById)
  .get("/:id/record", getRecordForWorkout)
  .post("/", createNewWorkout)
  .patch("/:id", updateWorkout)
  .delete("/:id", deleteWorkout);

export { router as workoutsRouter };
