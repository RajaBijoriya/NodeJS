const express = require("express");
const multer = require("multer");
const path = require("path");
const user_controller = require("../controller/userController");

const user_route = express.Router();

const bodyParser = require("body-parser");

user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({ extended: true }));

user_route.use(express.static("public"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(
      null,
      path.join(__dirname, "../public/userImages"),
      function (err, success) {
        if (err) throw err;
      }
    );
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "_" + file.originalname;
    cb(null, name, function (error, success1) {
      if (error) throw error;
    });
  },
});

const upload = multer({ storage: storage });

user_route.post(
  "/register",
  upload.single("image"),
  user_controller.registerUser
);

module.exports = user_route;
