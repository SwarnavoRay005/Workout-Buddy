import mongoose from "mongoose";
import Workout from "../models/workout.models.js";

export const getWorkouts = async (req, res) => {
  try {
    const list = await Workout.find();
    res.status(200).json(list);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getParticularWorkout = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "Invalid ID" });
    }
    const workout = await Workout.findById(id);
    if (!workout) {
      return res.status(400).json({ message: "No such workout exists" });
    }
    res.status(200).json(workout);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const createWorkout = async (req, res) => {
  try {
    const { title, reps, load } = req.body;

    let emptyFields = [];

    if (!title) {
      emptyFields.push("title");
    }
    if (!reps) {
      emptyFields.push("reps");
    }
    if (!load) {
      emptyFields.push("load");
    }
    if (emptyFields.length > 0) {
      return res
        .status(400)
        .json({ error: "Please fill in all the fields", emptyFields });
    }

    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const deleteWorkouts = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ message: "Invalid ID" });
    }
    const workout = await Workout.findOneAndDelete({ _id: id });
    if (!workout) {
      return res.status(400).json({ message: "No such workout exists" });
    }
    res.status(200).json({ message: "workout deleted" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const updateWorkouts = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ message: "Invalid ID" });
    }
    const workout = await Workout.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );
    if (!workout) {
      return res.status(400).json({ message: "No such workout exists" });
    }
    res.status(200).json({ message: "workout updated" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
