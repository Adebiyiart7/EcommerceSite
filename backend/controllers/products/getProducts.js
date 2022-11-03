const asyncHandler = require("express-async-handler");

// LOCAL IMPORTS
const Product = require("../../models/product");

/**
 * @description   Get products
 * @route         GET api/products
 * @access        public
 */
const getProducts = asyncHandler(async (req, res) => {
  try {
    // get products TODO: Add query options: sort, pagination. etc
    const products = await Product.find().select(["name", "price", "category"]);
    return res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(404);
    throw new Error("Error getting data");
  }
});

module.exports = getProducts;
