const express = require("express");
const mongoose = require("mongoose");
const { offerItemsController } = require("../controllers/offer.controller");
// const Category = require("../schemas/categorySchema");
// const categoryController = require("../controllers/category.controller");
const router = express.Router();

router.post("/offers", offerItemsController.createOfferItems);

router.get("/offers", offerItemsController.getOfferItems);
router.get("/offer", offerItemsController.getOfferByCategory);

module.exports = router;
