const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const app = express();
const PORT = 6000;

// DB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/myapp10", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ DB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// User Schema
const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    jobTitle: { type: String },
    Gender: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Custom Logging Middleware
app.use((req, res, next) => {
  console.log(`📥 Request: ${req.method} ${req.path}`);
  fs.appendFile(
    "log.txt",
    `${new Date().toISOString()} - ${req.method} ${req.path}\n`,
    (err) => {
      if (err) console.error("Log error:", err);
      next();
    }
  );
});

// POST API: Create a user
app.post("/api/users", async (req, res) => {
  const { firstName, lastName, email, jobTitle, Gender } = req.body;

  if (!firstName || !lastName || !email || !jobTitle || !Gender) {
    return res.status(400).json({ msg: "❗ All fields are required." });
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(409).json({ msg: "⚠️ Email already exists." });
    }

    const user = await User.create({
      firstName,
      lastName,
      email,
      jobTitle,
      Gender,
    });

    res.status(201).json({ msg: "✅ User created successfully", user });
  } catch (err) {
    console.error("Error creating user:", err);
    res
      .status(500)
      .json({ msg: "❌ Internal server error", error: err.message });
  }
});


// get method

// app.get("/api/users", async( req, res) =>{
//   const allDbUsers = await User.find({})
//   return res.json(allDbUsers);
// })


// get by id 
app.route("/api/users/:id").get(async (req, res) => {
  const user = await User.findById(req.params.id);
  if(!user) return res.status(404).json({error:"User not Found"})
  return res.json(user);
}).patch(async(req, res) => {
  await User.findByIdAndUpdate(req.params.id,{lastName: "jain"});
  return res.json({status: "Success"});
}).delete(async(req, res) => {
  await User.findByIdAndDelete(req.params.id);
  return res.json({status: "Deleted Successfull"});
})

// Server start
app.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`);
});
