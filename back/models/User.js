const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: { 
    type: String, 
    required: true },
});

module.exports = model("User", userSchema);
