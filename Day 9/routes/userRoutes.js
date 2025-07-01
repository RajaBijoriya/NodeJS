const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getUser);
router.get("/add", (req, res) => res.render("addUser"));
router.post("/add", userController.addUser);

module.exports = router;

// http://localhost:8000/add  ->post
