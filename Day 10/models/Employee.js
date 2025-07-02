const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // ✅ fixed
  },
  email: {
    type: String,
    required: true, // ✅ fixed
    unique: true,
  },
  phone: {
    type: Number,
    required: true, // ✅ fixed
    unique: true,
  },
  password: {
    type: String,
    required: true, // ✅ fixed
  },
  company: {
    type: String,
    required: true, // ✅ fixed
  },
});

const Employee = mongoose.model("Employee", empSchema); // ⬅️ Capitalized model name

module.exports = Employee;
