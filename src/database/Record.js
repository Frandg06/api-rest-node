import { Workout } from "./Workout.js";
import { sequelize } from "./database.js";
import { DataTypes, UUIDV4 } from "sequelize";

export const Record = sequelize.define(
  "records",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    record: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    workout: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "workouts",
        key: "id",
        onDelete: "CASCADE",
      },
    },
  },
  {
    timestamps: false,
  }
);

const getRecordForWorkout = async (workoutId) => {
  try {
    const record = await Record.findAll({
      where: { workout: workoutId },
      include: [
        {
          model: Workout,
          // se le da el miso nombre que se ha establecido en la relacion
          as: "workoutDetails",
          attributes: ["name"],
        },
      ],
    });
    return record;
  } catch (error) {
    throw {
      status: 500,
      message: error.message,
    };
  }
};

export const RecordModel = {
  getRecordForWorkout,
};
