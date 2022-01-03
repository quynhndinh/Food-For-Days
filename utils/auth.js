const withAuth = (req, res, next) => {
  if (!req.session.userId) {
    // res.redirect("/");
    res.status(401).json("Not logged in");
  } else {
    next();
  }
};

module.exports = withAuth;
