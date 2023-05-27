const express = require("express");
const router = express.Router();
const { createWorkOut,getAllWorkOuts,getSingleWorkOut,updateWorkout,deleteWorkout} = require('../controllers/UserWorkOutController')

// get all users
router.get("/read", getAllWorkOuts);

// create new user
router.post("/create", createWorkOut);

// get a single user
router.get("/read/:id", getSingleWorkOut);

// update a user
router.put("/update/:id", updateWorkout);

// delete a user
router.delete("/delete/:id", deleteWorkout);
module.exports = router;
