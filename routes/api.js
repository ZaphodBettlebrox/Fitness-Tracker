const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  Workout.update(
    { _id: req.params.id },
    { $addToSet: { exercises: req.body } }
  ).then(function(dbWorkout) {
    res.json(dbWorkout);
  });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/exercise", function(req, res) {
  res.sendFile("exercise.html", { root: "./public/" });
});

router.get("/stats", function(req, res) {
  res.sendFile("stats.html", { root: "./public/" });
});

module.exports = router;
