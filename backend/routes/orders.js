// NODE_MODULES
const express = require("express");
const router = express.Router();

// LOCAL IMPORTS
const createOrder = require("../controllers/orders/createOrder");
const getOrders = require("../controllers/orders/getOrders");
const admin = require("../middleware/admin");
const auth = require("../middleware/auth");
const isActive = require("../middleware/isActive");

router
  .route("/")
  .post(auth, isActive, createOrder)
  .get([auth, isActive, admin], getOrders);
module.exports = router;
