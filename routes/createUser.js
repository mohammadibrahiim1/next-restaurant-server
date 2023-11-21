const express = require("express");
const router = express.Router();
const { createUserController } = require("../controllers/user.controller");

router.post("/signup", createUserController.createUser);

module.exports = router;
