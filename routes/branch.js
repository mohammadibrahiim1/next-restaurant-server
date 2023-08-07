const express = require("express");
// const mongoose = require("mongoose");
const { branchController } = require("../controllers/branch.controller");
// const Category = require("../schemas/categorySchema");
// const categoryController = require("../controllers/category.controller");
const router = express.Router();

router.post("/branch", branchController.createBranch);
router.get("/branches", branchController.getBranches);
// router.put("/categories", categoryController.updateCategory);
module.exports = router;
