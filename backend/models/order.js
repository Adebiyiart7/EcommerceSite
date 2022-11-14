const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    orderID: {
      type: String,
      required: true,
      unique: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    first_name: {
      type: String,
      min: 3,
      max: 255,
      trim: true,
      required: true,
    },
    last_name: {
      type: String,
      min: 3,
      max: 255,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      min: 3,
      max: 255,
      trim: true,
      required: true,
    },
    company: {
      type: String,
      min: 3,
      max: 255,
      trim: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    country_or_region: {
      type: String,
      min: 3,
      max: 50,
      trim: true,
      required: true,
    },
    city_or_state: {
      type: String,
      min: 3,
      max: 50,
      trim: true,
      required: true,
    },
    postal_code: {
      type: String,
      min: 3,
      max: 10,
      trim: true,
      required: true,
    },
    phone_number: {
      type: String,
      min: 3,
      max: 20,
      trim: true,
      required: true,
    },
    street_address: {
      type: String,
      min: 3,
      max: 1000,
      trim: true,
      required: true,
    },
    status: {
      type: String,
      required: true,
      lowercase: true,
      enum: ["pending", "paid", "cancelled"],
    },
    orderItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        name: {
          type: String,
          min: 3,
          max: 255,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
