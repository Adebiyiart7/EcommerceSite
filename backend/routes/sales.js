const express = require("express");
const router = express.Router();

// LOCAL IMPORTS
const getSales = require("../controllers/sales/getSales");
const auth = require("../middleware/auth");
const isActive = require("../middleware/isActive");
const admin = require("../middleware/admin");

router.get("/", [auth, isActive, admin], getSales);

module.exports = router;
