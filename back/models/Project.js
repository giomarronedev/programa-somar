const { Schema, model } = require('mysql2');

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = model("Project", projectSchema);
