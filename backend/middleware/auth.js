const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

// LOCAL IMPORTS
const User = require("../models/user");

const auth = asyncHandler(async (req, res, next) => {
  let token; // initialze a token

  // check if the request header has a token and the token starts with "Bearer"
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    // get extract the token
    token = req.headers.authorization.split(" ")[1];
    try {
      // verify user and extract user id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // get and set user to the request object
      req.user = await User.findById(decoded._id).select("-password");

      // call the next middleware
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Unauthorized");
    }
  }

  if (!token) {
    res.status(400);
    throw new Error("Unauthorized, no token");
  }
});

module.exports = auth;
