const Joi = require("joi");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

// LOCAL IMPORTS
const generateToken = require("../../utils/generateToken");
const User = require("../../models/user");

/**
 * @description   login user
 * @route         POST api/users/login
 * @access        public
 */
const loginUser = asyncHandler(async (req, res) => {
  // validate user input
  const schema = Joi.object({
    email: Joi.string().min(3).max(255).email().required(),
    password: Joi.string().min(8).max(255).required(),
  });
  const { error } = schema.validate(req.body);

  if (error) {
    res.status(400);
    console.log(error.message);
    throw new Error(error.message);
  }

  // find the user
  const { email, password } = req.body;
  let user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    try {
      return res.status(200).json({
        id: user._id,
        token: generateToken(user._id),
      });
    } catch (error) {
      console.log(error);
      res.status(400).send("Error logging user!");
    }
  } else {
    res.status(400).send("Invalid Credentials");
  }
});

module.exports = loginUser;
