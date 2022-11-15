// NODE_MODULES
const express = require("express");
const router = express.Router();

// LOCAL IMPORT
const registerUser = require("../controllers/users/registerUser");
const loginUser = require("../controllers/users/loginUser");
const getMe = require("../controllers/users/getMe");
const auth = require("../middleware/auth");
const isActive = require("../middleware/isActive");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", [auth, isActive], getMe);

module.exports = router;
