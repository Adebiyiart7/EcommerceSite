const asyncHandler = require("express-async-handler");

// LOCAL IMPORTS
const Order = require("../../models/order");

/**
 * @description      Get orders
 * @route            GET /api/orders
 * @access           private
 * @permission       admin, superAdmin
 */
const getOrders = asyncHandler(async (req, res) => {
  try {
    const orders = await Order.find().select([
      "_id",
      "orderID",
      "first_name",
      "last_name",
      "amount",
      "status",
      "createdAt",
    ]);
    res.status(200).json(orders);
  } catch (error) {
    console.log9(error);
    res.status(400);
    throw new Error("Error fetching orders!");
  }
});

module.exports = getOrders;
