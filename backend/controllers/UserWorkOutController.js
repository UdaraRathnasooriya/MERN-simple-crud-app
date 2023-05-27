const UserWorkOut = require("../models/UserWorkOut");

// get all workouts

const getAllWorkOuts = async (req, res) => {
  const workouts = await UserWorkOut.find({});

  res.status(200).send(workouts);
};

// get a single workout

const getSingleWorkOut = async (req, res) => {
  const { id } = req.params;
  try {
    const workout = await UserWorkOut.findById(id);
    if (!workout) {
      return res.status(404).send("Not Found");
    }
    res.status(200).send(workout);
  } catch (error) {
    console.log(error);
  }
};

// create a new workout

const createWorkOut = async (req, res) => {
  const { title, load, reps } = req.body;
  // add doc to database
  try {
    const workout = await UserWorkOut.create({
      title,
      load,
      reps,
    });
    res.send(workout);
  } catch (error) {
    console.log(error.message);
  }
};

// update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    const workout = await UserWorkOut.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );
    if (!workout) {
      return res.status(404).send("Not Found");
    }
    res.status(200).send(workout);
  } catch (error) {
    console.log(error);
  }
};

// delete a workout
const deleteWorkout = async (req,res) => {
  const { id } = req.params;
  try {
    const workout = await UserWorkOut.findOneAndDelete({ _id: id });

    if (!workout) {
      return res.status(404).send("Not Found");
    }
    res.status(200).send(workout);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createWorkOut,
  getAllWorkOuts,
  getSingleWorkOut,
  deleteWorkout,
  updateWorkout,
};
