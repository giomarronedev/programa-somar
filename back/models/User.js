const { Schema, model } = require('mysql2');

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
