const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./model/user");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/Jeeva")
  .then(() => {
    console.log("MongoDB Connected Successfully!");
  })
  .catch((err) => {
    console.error(err);
  });

app.get("/", (req, res) => {
  userModel
    .find({})
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.get("/:id", (req, res) => {
  let id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.send("Invalid User ID!");
  userModel
    .findById(id)
    .then((data) => {
      if (!data) return res.status(404).send("User Not Found!");
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.post("/create", (req, res) => {
  userModel
    .create(req.body)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.listen(3000, () => console.log("Server is running on port 3000"));
