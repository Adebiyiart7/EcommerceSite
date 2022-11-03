// NODE_MODULES
const express = require("express");
const router = express.Router();

// LOCAL IMPORT
const registerUser = require("../controllers/users/registerUser");
const loginUser = require("../controllers/users/loginUser");
const getMe = require("../controllers/users/getMe");
const { protect } = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;
