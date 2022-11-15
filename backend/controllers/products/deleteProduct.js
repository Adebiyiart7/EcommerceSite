const asyncHandler = require("express-async-handler");

// LOCAL IMPORTS
const Product = require("../../models/product");

/**
 * @description   delete product
 * @route         DELETE api/products
 * @access        private
 */
const deleteProduct = asyncHandler(async (req, res) => {
  try {
    // find product
    const product = await Product.findById(req.params.id);

    // raise error if id is invalid
    if (!product) {
      res.status(404);
      throw new Error("Product not found!");
    }

    // Delete Product
    await product.remove();
    res.status(200).send(`Product Deleted ${req.params.id}!`);
  } catch (error) {
    console.log(error);
    res.status(400);
    throw new Error("Error Deleting Product");
  }
});

module.exports = deleteProduct;
