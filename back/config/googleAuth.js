const passport = require("passport");

// Google OAuth login
exports.googleLogin = passport.authenticate("google", {
  scope: ["profile", "email"],
});

// Google OAuth callback
exports.googleCallback = passport.authenticate("google", {
  failureRedirect: "/login",
});

// Get user profile
exports.getUserProfile = (req, res) => {
  res.json({ user: req.user });
};

// Logout
exports.logout = (req, res) => {
  req.logout();
  res.redirect("/login");
};
