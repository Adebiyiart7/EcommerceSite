const Joi = require("joi");
const _ = require("lodash");
const asyncHandler = require("express-async-handler");

// LOCAL IMPORTS
const Product = require("../../models/product");

/**
 * @description   Update product
 * @route         PUT api/products
 * @access        private
 */
const updateProduct = asyncHandler(async (req, res) => {
  // validate input
  const schema = Joi.object({
    name: Joi.string().min(3).max(255),
    category: Joi.string().min(3).max(50),
    subCategory: Joi.string().min(3).max(50),
    description: Joi.string().min(3).max(1000),
    price: Joi.number().min(1).max(1000000),
    displayImage: Joi.string().min(3).max(255),
    images: Joi.array(),
  });
  const { error } = schema.validate(req.body);

  if (error) {
    res.status(400);
    throw new Error(error.message);
  }

  // Update Product
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res
      .status(200)
      .json(
        _.pick(product, [
          "_id",
          "name",
          "category",
          "subCategory",
          "description",
          "price",
          "displayImage",
          "images",
        ])
      );
  } catch (error) {
    console.log(error);
    res.status(400);
    throw new Error("Error updating product");
  }
});

module.exports = updateProduct;
