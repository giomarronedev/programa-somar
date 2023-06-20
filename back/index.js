const express = require("express");
const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/Routes");
const passport = require('passport');
const session = require('cookie-session');
const authRoutes = require('./routes/auth');
const projectRoutes = require('./routes/projects');


require('./config/googleAuth');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);

app.use(passport.initialize());
app.use(passport.session());

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
