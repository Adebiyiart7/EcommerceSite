const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema(
  {
    specialID: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    first_name: {
      min: 3,
      max: 255,
      trim: true,
      type: String,
      required: [true, "This field must not be empty"],
    },
    last_name: {
      min: 3,
      max: 255,
      trim: true,
      type: String,
      required: [true, "This field must not be empty"],
    },
    email: {
      min: 3,
      max: 255,
      trim: true,
      type: String,
      required: [true, "This field must not be empty"],
    },
    password: {
      min: 8,
      max: 255,
      type: String,
      required: [true, "This field must not be empty"],
    },
    isSuperAdmin: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    }, // change default to false and activate user with an email
  },
  { timestamps: true }
);

userSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      isActive: this.isActive,
      isAdmin: this.isAdmin,
      isSuperAdmin: this.isSuperAdmin,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
};

module.exports = mongoose.model("User", userSchema);
