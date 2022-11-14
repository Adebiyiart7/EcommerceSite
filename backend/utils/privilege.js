const products = (user, res) => {
  // authorization
  if (user.isActive === false && user.isAdmin === false) {
    res.status(403);
    throw new Error("Unauthorized! You do not have enough privilege.");
  }
};

module.exports = {
  products,
};
