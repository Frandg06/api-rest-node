import { workoutService } from "../services/workoutService.js";

const getAllWorkouts = async (req, res) => {
  const allWorkouts = await workoutService.getAllWorkouts();
  res.send({ status: "success", data: allWorkouts });
};

const getWorkoutById = (req, res) => {
  const {
    params: { workoutId },
  } = req;
  if (!workoutId) {
    return;
  }
  const workout = workoutService.getWorkoutById(req.params.id);
  res.send("Get workout with id " + req.params.id);
};

const createNewWorkout = async (req, res) => {
  const { body } = req;
  if (!body.name || !body.mode) {
    res.status(400).send({ status: "Failed", message: "Missing key" });
  }

  const newWorkout = {
    name: body.name,
    mode: body.mode,
  };

  try {
    const createdWorkout = await workoutService.createNewWorkout(newWorkout);
    res.status(201).send({ status: "success", data: createdWorkout });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "Failed", message: error.message || "error" });
  }
};

const updateWorkout = (req, res) => {
  const updatdeWorkout = workoutService.updateWorkout(req.params.id, req.body);
  res.send("Update workout with id " + req.params.id);
};

const deleteWorkout = (req, res) => {
  const deletedWorkout = workoutService.deleteWorkout(req.params.id);
  res.send("Delete workout with id " + req.params.id);
};

export const workoutsController = {
  getAllWorkouts,
  getWorkoutById,
  createNewWorkout,
  updateWorkout,
  deleteWorkout,
};
