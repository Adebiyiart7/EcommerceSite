// NODE_MODULES
const express = require("express");
const router = express.Router();

// LOCAL IMPORTS
const createOrder = require("../controllers/orders/createOrder");
const getOrders = require("../controllers/orders/getOrders");
const { protect } = require("../middleware/authMiddleware");

router.route("/").post(protect, createOrder).get(protect, getOrders);
module.exports = router;
