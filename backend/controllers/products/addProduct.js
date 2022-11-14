const Joi = require("joi");
const _ = require("lodash");
const asyncHandler = require("express-async-handler");

// LOCAL IMPORTS
const Product = require("../../models/product");
const privilege = require("../../utils/privilege");

/**
 * @description   Add new product
 * @route         POST api/products
 * @access        private
 * @permission    admin, superAdmin
 */
const addProduct = asyncHandler(async (req, res) => {
  const { user } = req;

  privilege.products(user, res); // authorize user

  // validate input
  const schema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    category: Joi.string().min(3).max(50).required(),
    subCategory: Joi.string().min(3).max(50),
    description: Joi.string().min(3).max(1000).required(),
    price: Joi.number().min(1).max(1000000).required(),
    displayImage: Joi.string().min(3).max(255),
    images: Joi.array(),
  });
  const { error } = schema.validate(req.body);

  if (error) {
    res.status(400);
    throw new Error(error.message);
  }

  // Add Product
  try {
    const product = await Product.create({
      publisher: user,
      ..._.pick(req.body, [
        "name",
        "category",
        "subCategory",
        "description",
        "price",
        "displayImage",
        "images",
      ]),
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
    throw new Error("Error adding product!");
  }
});

module.exports = addProduct;
