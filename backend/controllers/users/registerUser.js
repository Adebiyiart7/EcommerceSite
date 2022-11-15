const Joi = require("joi");
const _ = require("lodash");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

// LOCAL IMPORTS
const User = require("../../models/user");

const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
const passwordError =
  "Password must be more than 8 chars, have at least one number, at least one special character(!@#$%^&*), at least one uppercase and one lowercase.";

/**
 * @description   Create a user
 * @route         POST api/users/register
 * @access        public
 */
const registerUser = asyncHandler(async (req, res) => {
  // validate user input
  const schema = Joi.object({
    first_name: Joi.string().min(3).max(255).required(),
    last_name: Joi.string().min(3).max(255).required(),
    email: Joi.string().min(3).max(255).email().required(),
    password: Joi.string()
      .min(8)
      .max(255)
      .required()
      .regex(passwordRegEx)
      .message(passwordError),
  });
  const { error } = schema.validate(req.body);

  if (error) {
    res.status(400);
    console.log(error.message);
    throw new Error(error.message);
  }

  // check if user already exist
  const { first_name, last_name, email, password } = req.body;
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
      specialID: Date.now().toString(),
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: hash,
    });

    const token = user.generateAuthToken();

    return res.status(201).json({
      ..._.pick(user, ["_id", "first_name", "last_name", "email"]),
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(400);
    throw new Error("Error creating user!");
  }
});

module.exports = registerUser;
