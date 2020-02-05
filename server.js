const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "fitnesstracker";
const collections = ["workouts"];

// //is this needed?
// const Fitness = require("./schema.js");
// //--

// const db = mongojs(databaseUrl, collections);

// db.on("error", error => {
//   console.log("Database Error:", error);
// });

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnesstracker", { useNewUrlParser: true });

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname + "public/index.html"));
// });
// app.get("/stats", (req, res) => {
//   res.sendFile(path.join(__dirname + "public/stats.html"));
// });
// app.get("/exercise", (req, res) => {
//   res.sendFile(path.join(__dirname + "public/exercise.html"));
// });

//need to add more code here
app.use(require("./routes/api"))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
