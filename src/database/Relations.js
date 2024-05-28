import { Record } from "./Record.js";
import { Workout } from "./Workout.js";

Workout.hasMany(Record, {
  foreignKey: "workout",
  sourceKey: "id",
  // se le da nombre a la relacion
  as: "recordDetails",
});

Record.belongsTo(Workout, {
  foreignKey: "workout",
  targetKey: "id",
  // se le da nombre a la relacion
  as: "workoutDetails",
});
