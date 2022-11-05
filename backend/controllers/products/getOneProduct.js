const asyncHandler = require("express-async-handler");

// LOCAL IMPORTS
const Product = require("../../models/product");

/**
 * @description   Get product
 * @route         GET api/products
 * @access        public
 */
const getOneProduct = asyncHandler(async (req, res) => {
  try {
    // get product
    const product = await Product.findById(req.params.id).select([
      "name",
      "price",
      "category",
    ]);
    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(404);
    throw new Error("Error getting data");
  }
});

module.exports = getOneProduct;
