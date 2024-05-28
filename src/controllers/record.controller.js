import { recordService } from "../services/recordService.js";

const getRecordForWorkout = async (req, res) => {
  const { id: workoutId } = req.params;
  if (!workoutId) {
    res.status(400).json({
      status: "failed",
      data: "Workout id is required",
    });
  }
  try {
    const record = await recordService.getRecordForWorkout(workoutId);
    res.status(200).json({
      status: "ok",
      data: record,
    });
  } catch (error) {
    res.status(error?.status || 500).json({
      status: "failed",
      data: error.message,
    });
  }
};

export const recordController = {
  getRecordForWorkout,
};
