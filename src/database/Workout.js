import { sequelize } from "./database.js";
import { DataTypes } from "sequelize";

export const Workout = sequelize.define(
  "workouts",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

const getAllWorkouts = async () => {
  try {
    const workouts = await Workout.findAll();
    if (workouts.length === 0) {
      throw {
        status: 500,
        message: "No workouts found",
      };
    }
    return workouts;
  } catch (error) {
    throw {
      status: 500,
      message: "Error getting all workouts",
    };
  }
};

const createNewWorkout = async (newWorkout) => {
  const isAlreadyAdded = await Workout.findOne({
    where: { name: newWorkout.name },
  });
  if (isAlreadyAdded) {
    throw {
      status: 500,
      message: "Workout already exists",
    };
  }
  try {
    const createdWorkout = await Workout.create(newWorkout);
    return createdWorkout;
  } catch (error) {
    throw {
      status: 500,
      message: "Error creating workout",
    };
  }
};

export const WorkoutModel = {
  getAllWorkouts,
  createNewWorkout,
};
