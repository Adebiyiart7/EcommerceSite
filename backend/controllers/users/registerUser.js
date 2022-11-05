const Joi = require("joi");
const _ = require("lodash");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

// LOCAL IMPORTS
const generateToken = require("../../utils/generateToken");

// LOCAL IMPORTS
const User = require("../../models/user");

/**
 * @description   Create a user
 * @route         POST api/users/register
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
  const { fullname, email, password } = req.body;
  let user = await User.findOne({ email });
  if (user) {
    res.status(400);
    throw new Error("User already exist!");
  }

  try {
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // create new user
    user = await User.create({
      fullname: fullname,
      email: email,
      password: hash,
    });

    return res.status(201).json({
      ..._.pick(user, ["_id", "fullname", "email"]),
      token: generateToken(user._id),
    });
  } catch (error) {
    console.log(error);
    res.status(400);
    throw new Error("Error creating user!");
  }
});

module.exports = registerUser;
