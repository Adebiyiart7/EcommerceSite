const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    publisher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
      min: 3,
      max: 255,
    },
    category: {
      type: String,
      trim: true,
      required: true,
      min: 3,
      max: 255,
    },
    subCategory: {
      type: String,
      trim: true,
      required: false,
      min: 3,
      max: 255,
    },
    description: {
      type: String,
      trim: true,
      required: true,
      min: 3,
      max: 1000,
    },
    price: {
      type: Number,
      required: true,
    },
    stars: {
      type: Number,
      default: 0,
    },
    displayImage: {
      type: String,
      // required: true,
    },
    images: [
      {
        type: String,
        max: 255,
      },
    ],
    available: {
      type: Boolean,
      require: true,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
