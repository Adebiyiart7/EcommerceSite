const express = require("express");
const router = express.Router();

// LOCAL IMPORTS
const addProduct = require("../controllers/products/addProduct");
const deleteProduct = require("../controllers/products/deleteProduct");
const getOneProduct = require("../controllers/products/getOneProduct");
const getProducts = require("../controllers/products/getProducts");
const updateProduct = require("../controllers/products/updateProduct");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(getProducts).post(protect, addProduct);
router
  .route("/:id")
  .get(getOneProduct)
  .put(protect, updateProduct)
  .delete(protect, deleteProduct);

module.exports = router;
