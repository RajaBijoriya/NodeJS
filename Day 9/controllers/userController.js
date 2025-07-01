const User = require("../models/User");

// Add new user
exports.addUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = new User({ name, email });
    await newUser.save();
    res.redirect("/");
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).send("Error adding user");
  }
};

// Get all users
exports.getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.render("index", { users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Error fetching users");
  }
};

// Render edit form with user data
exports.editUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.render("editUser", { user });
  } catch (error) {
    console.error("Error loading user for edit:", error);
    res.status(500).send("Error loading user for edit");
  }
};

// Update user
exports.updateUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    await User.findByIdAndUpdate(req.params.id, { name, email });
    res.redirect("/");
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).send("Error updating user");
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).send("Error deleting user");
  }
};
