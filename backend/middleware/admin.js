const admin = (req, res, next) => {
  if (!req.user.isAdmin && !req.user.isSuperAdmin) {
    res.status(403);
    throw new Error("Access denied!");
  }

  next();
};

module.exports = admin;
