const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullname: {
    min: 3,
    max: 255,
    trim: true,
    type: String,
    require: [true, "This field must not be empty"],
  },
  email: {
    min: 3,
    max: 255,
    trim: true,
    type: String,
    require: [true, "This field must not be empty"],
  },
  password: {
    min: 8,
    max: 255,
    type: String,
    require: [true, "This field must not be empty"],
  },
});

module.exports = mongoose.model("User", userSchema);
