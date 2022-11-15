const asyncHandler = require("express-async-handler");

// LOCAL IMPORTS
const Order = require("../../models/order");

/**
 * @description     Get All Sales: Sales here means successful(PAID) orders
 * @route           GET /api/sales
 * @access          private
 * @permission      admin and superAdmin
 *
 */
const getSales = asyncHandler(async (req, res) => {
  try {
    const sales = await Order.find(); // TODO select, pagination
    res.status(200).json(sales);
  } catch (error) {
    console.log(error);
    res.status(400);
    throw new Error("Error getting sales!");
  }
});

module.exports = getSales;
