const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./model/user");

const app = express();
app.use(express.json());
app.use(cors());

const dbconnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Jeevaramana:4CNjQlFs8aLtk5MD@crud-database.pw8euce.mongodb.net/?retryWrites=true&w=majority&appName=CRUD-Database"
    );
    console.log("MongoDB Connected Successfully!");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};
dbconnection();

app.listen(3000, () => console.log("Server is running on port 3000"));

app.get("/", (req, res) => {
  userModel
    .find({})
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

app.get("/:id", (req, res) => {
  let id = req.params.id;
  userModel
    .findById(id)
    .then((user) => {
      if (!user) return res.status(404).send("User Not Found!");
      res.json(user);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

app.post("/create", (req, res) => {
  userModel
    .create(req.body)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
});
