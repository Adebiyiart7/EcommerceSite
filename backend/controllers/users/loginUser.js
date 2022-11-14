const Joi = require("joi");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

// LOCAL IMPORTS
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
    const token = user.generateAuthToken();
    try {
      return res.status(200).json({
        id: user._id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        isSuperAdmin: user.isSuperAdmin,
        isAdmin: user.isAdmin,
        isActive: user.isActive,
        token: token,
      });
    } catch (error) {
      console.log(error);
      res.status(400);
      throw new Error("Error logging user!");
    }
  } else {
    res.status(400);
    throw new Error("Invalid Credentials");
  }
});

module.exports = loginUser;
