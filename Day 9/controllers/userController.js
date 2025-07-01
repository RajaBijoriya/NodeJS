const User = require("../models/User");

// add new user
exports.addUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = new User({ name, email });
    await newUser.save();
    res.redirect("/");
  } catch (error) {
    res.status(500).send("Error adding user");
  }
};

// display all user

exports.getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.render("index", { users });
  } catch (error) {
    res.status(500).send("error fetching the user");
  }
};
