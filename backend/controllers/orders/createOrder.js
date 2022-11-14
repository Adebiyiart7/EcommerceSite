// NODE_MODULES
const asyncHandler = require("express-async-handler");
const Joi = require("joi");
const _ = require("lodash");

// LOCAL IMPORTS
const Order = require("../../models/order");
const Product = require("../../models/product");

/**
 * @description   Create Order
 * @route         POST /api/orders
 * @access        private
 */
const createOrder = asyncHandler(async (req, res) => {
  const { user } = req;
  let { body: data } = req;
  // convert stringified value of orderItems to a JSON object
  data.orderItems = JSON.parse(data.orderItems);

  // validate input
  const schema = Joi.object({
    first_name: Joi.string().required().min(3).max(255),
    last_name: Joi.string().required().min(3).max(255),
    email: Joi.string().required().min(3).max(255).email(),
    company: Joi.string().min(3).max(255),
    amount: Joi.number().min(1).max(100000000).required(),
    country_or_region: Joi.string().required().min(3).max(50),
    city_or_state: Joi.string().required().min(3).max(50),
    postal_code: Joi.string().required().min(3).max(10),
    phone_number: Joi.string().required().min(3).max(20),
    street_address: Joi.string().required().min(3).max(1000),
    orderItems: Joi.array().items(
      Joi.object().keys({
        id: Joi.string().required().min(3).max(255),
        name: Joi.string().required().min(3).max(255),
        price: Joi.number().min(1).max(1000000).required(),
        quantity: Joi.number().min(1).max(1000).required(),
      })
    ),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    res.status(400);
    throw new Error(error);
  }

  // Order items
  const orderItems = async () => {
    const items = [];
    for (let orderItem of data.orderItems) {
      items.push({
        product: await Product.findById(orderItem.id),
        name: orderItem.name,
        price: orderItem.price,
        quantity: orderItem.quantity,
      });
    }

    return items;
  };

  try {
    const order = await Order.create({
      orderID: Date.now().toString(),
      user: user,
      ..._.pick(req.body, [
        "first_name",
        "last_name",
        "email",
        "company",
        "amount",
        "country_or_region",
        "city_or_state",
        "postal_code",
        "phone_number",
        "street_address",
      ]),
      status: "Pending",
      orderItems: await orderItems(),
    });

    res.status(201).json(order);
  } catch (error) {
    console.log(error);
    res.status(400);
    throw new Error("Error creating order!");
  }
});

module.exports = createOrder;
