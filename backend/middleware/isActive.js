const isActive = (req, res, next) => {
  // if user is inactive return a forbidden error
  if (!req.user.isActive) {
    res.status(403);
    throw new Error("Access denied: Your account is inactive.");
  }

  next();
};

module.exports = isActive;
