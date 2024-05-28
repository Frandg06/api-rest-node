import { WorkoutModel } from "../database/Workout.js";
import { v4 as uuidv4 } from "uuid";

const getAllWorkouts = async () => {
  const workouts = await WorkoutModel.getAllWorkouts();
  return workouts;
};

const getWorkoutById = () => {
  return;
};
const createNewWorkout = async (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuidv4(),
  };
  const createdWorkout = await WorkoutModel.createNewWorkout(workoutToInsert);
  return createdWorkout;
};
const updateWorkout = () => {
  return;
};
const deleteWorkout = () => {
  return;
};

export const workoutService = {
  getAllWorkouts,
  getWorkoutById,
  createNewWorkout,
  updateWorkout,
  deleteWorkout,
};
