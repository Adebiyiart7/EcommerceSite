const asyncHandler = require("express-async-handler");
const _ = require("lodash");

// LOCAL IMPORTS
const User = require("../../models/user");

/**
 * @description   get current user
 * @route         GET api/users/me
 * @access        private
 */
const getMe = asyncHandler(async (req, res) => {
  try {
    // find the user
    let user = await User.findById(req.user.id);
    return res.status(200).json(_.pick(user, ["_id", "email", "fullname"]));
  } catch (error) {
    console.log(error);
    return res.status(404).send("User not found");
  }
});

module.exports = getMe;
