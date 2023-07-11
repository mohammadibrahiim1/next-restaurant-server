const express = require("express");
const mongoose = require("mongoose");
const { categoryController } = require("../controllers/category.controller");
// const Category = require("../schemas/categorySchema");
// const categoryController = require("../controllers/category.controller");
const router = express.Router();

router.post("/categories", categoryController.createCategory);
router.get("/categories", categoryController.getCategories);
router.put("/categories", categoryController.updateCategory);
module.exports = router;
