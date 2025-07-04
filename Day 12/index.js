// register
// login

// install express , mongoose , multer

const express = require("express");
const mongoose = require("mongoose");
const user_routes = require("./routes/userRoute");

const app = express();
const PORT = 8080;

mongoose
  .connect("mongodb://127.0.0.1:27017/JWT_Auth")
  .then(() => {
    console.log("mongoDb Connected");
  })
  .catch((err) => {
    console.log("error ", err);
  });

// http://localhost:8080/api/register
app.use("/api", user_routes);

// listen

app.listen(PORT, (req, res) => {
  console.log("Server Started...");
});
