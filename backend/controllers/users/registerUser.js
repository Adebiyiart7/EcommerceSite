const Joi = require("joi");
const _ = require("lodash");
const asyncHandler = require("express-async-handler");

// LOCAL IMPORTS
const User = require("../../models/user");

/**
 * @description   Create a user
 * @route         api/users/register
 * @access        public
 */
const registerUser = asyncHandler(async (req, res) => {
  // validate user input
  const schema = Joi.object({
    fullname: Joi.string().min(3).max(255).required(),
    email: Joi.string().min(3).max(255).email().required(),
    password: Joi.string().min(8).max(255).required(),
  });
  const { error } = schema.validate(req.body);

  if (error) {
    res.status(400);
    console.log(error.message);
    throw new Error(error.message);
  }

  // check if user already exist
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    res.status(400);
    throw new Error("User already exist!");
  }

  // create new user
  const { fullname, email, password } = req.body;
  user = await User.create({
    fullname: fullname,
    email: email,
    password: password,
  });
  res.json(_.pick(user, ["fullname", "email"]));
});

module.exports = registerUser;
