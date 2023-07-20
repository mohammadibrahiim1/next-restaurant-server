const express = require("express");
const mongoose = require("mongoose");
const { menuController } = require("../controllers/menu.controller");
// const Category = require("../schemas/categorySchema");
// const categoryController = require("../controllers/category.controller");
const router = express.Router();

router.post("/menu", menuController.createMenu);
router.get("/allMenu", menuController.getMenu);
// router.get("/menu", menuController.getMenuByCategory);
// router.get("/categories", categoryController.getCategories);
// router.put("/categories", categoryController.updateCategory);
module.exports = router;
