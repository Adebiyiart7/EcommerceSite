const express = require("express");
const router = express.Router();

// LOCAL IMPORTS
const addProduct = require("../controllers/products/addProduct");
const deleteProduct = require("../controllers/products/deleteProduct");
const getProducts = require("../controllers/products/getProducts");
const updateProduct = require("../controllers/products/updateProduct");
const { protect } = require("../middleware/authMiddleware");

router.get("/", getProducts);
router.post("/", protect, addProduct);
router.put("/:id", protect, updateProduct);
router.delete("/:id", protect, deleteProduct);

module.exports = router;
