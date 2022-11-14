const asyncHandler = require("express-async-handler");

// LOCAL IMPORTS
const Product = require("../../models/product");

/**
 * @description   Get products
 * @route         GET api/products
 * @access        public
 */
const getProducts = asyncHandler(async (req, res) => {
  const query = {
    ...req.query,
  };
  try {
    const products = await Product.find(query).select([
      "_id",
      "name",
      "price",
      "available",
      "category",
      "stars",
    ]);
    return res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(404);
    throw new Error("Error getting data");
  }
});

module.exports = getProducts;
