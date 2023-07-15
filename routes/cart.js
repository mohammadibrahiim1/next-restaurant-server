const express = require("express");
const mongoose = require("mongoose");
const {
  addItemToCartController,
} = require("../controllers/addItemToCart.controller");
// const Category = require("../schemas/categorySchema");
// const categoryController = require("../controllers/category.controller");
const router = express.Router();

router.post("/cart", addItemToCartController.addItemToCart);
// router.get("/popularItems", popularItemsController.getPopularItems);
// router.get("/allMenu", menuController.getMenu);
// router.get("/menu", menuController.getMenuByCategory);
// router.get("/categories", categoryController.getCategories);
// router.put("/categories", categoryController.updateCategory);
module.exports = router;
