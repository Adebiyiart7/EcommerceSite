// NODE_MODULES
const express = require("express");
const router = express.Router();

// LOCAL IMPORT
const registerUser = require("../controllers/users/registerUser");

router.post("/register", registerUser);

module.exports = router;
