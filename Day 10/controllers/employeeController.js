const Employee = require("../models/Employee");

// Add 
exports.addEmployee = async (req, res) => {
  try {
    const { name, email, phone, password, company } = req.body;
    const newEmployee = new Employee({ name, email, phone, password, company });
    await newEmployee.save();
    res.redirect("/");
  } catch (error) {
    console.error("Error adding employee:", error);
    res.status(500).send("Error adding employee");
  }
};

// Get 
exports.getEmployee = async (req, res) => {
  try {
    const employee = await Employee.find(); // ⬅ changed to plural for clarity
    res.render("index", { employee }); // ⬅ variable name should match in index.ejs
  } catch (error) {
    console.error("Error fetching employees:", error);
    res.status(500).send("Error fetching employees"); // ⬅ typo: was `sent`
  }
};

// Render
exports.editEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).send("Employee not found");
    res.render("editEmployee", { employee });
  } catch (error) {
    console.error("Error loading employee for edit:", error);
    res.status(500).send("Error loading employee for edit");
  }
};

// Update 
exports.updateEmployee = async (req, res) => {
  try {
    const { name, email, phone, password, company } = req.body;
    await Employee.findByIdAndUpdate(req.params.id, {
      name,
      email,
      phone,
      password,
      company,
    });
    res.redirect("/");
  } catch (error) {
    console.error("Error updating employee:", error);
    res.status(500).send("Error updating employee");
  }
};

// Delete 
exports.deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (error) {
    console.error("Error deleting employee:", error);
    res.status(500).send("Error deleting employee");
  }
};
