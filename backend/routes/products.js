const express = require("express");
const router = express.Router();

// LOCAL IMPORTS
const addProduct = require("../controllers/products/addProduct");
const deleteProduct = require("../controllers/products/deleteProduct");
const getOneProduct = require("../controllers/products/getOneProduct");
const getProducts = require("../controllers/products/getProducts");
const updateProduct = require("../controllers/products/updateProduct");
const admin = require("../middleware/admin");
const auth = require("../middleware/auth");
const isActive = require("../middleware/isActive");

router.route("/").get(getProducts).post([auth, isActive, admin], addProduct);
router
  .route("/:id")
  .get(getOneProduct)
  .put([auth, isActive, admin], updateProduct)
  .delete([auth, isActive, admin], deleteProduct);

module.exports = router;
