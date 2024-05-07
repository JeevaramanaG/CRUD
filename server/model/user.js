const mongoose = require("mongoose");

const userschema = mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});
userModel = mongoose.model("san", userschema);
module.exports = userModel;
