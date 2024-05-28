import { RecordModel } from "../database/Record.js";

const getRecordForWorkout = async (workoutId) => {
  try {
    const record = await RecordModel.getRecordForWorkout(workoutId);
    return record;
  } catch (error) {
    throw error;
  }
};

export const recordService = {
  getRecordForWorkout,
};
