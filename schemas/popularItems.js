const mongoose = require("mongoose");

const popularItemsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  flat_price: String,
  convert_price: Number,
  currency_price: String,
  price: String,
  item_type: Number,
  status: Number,
  description: String,
  caution: String,
  thumb: String,
  cover: String,
  preview: String,
  variations: {
    2: [
      {
        id: Number,
        item_id: Number,
        item_attribute_id: Number,
        name: String,
        price: String,
        caution: {
          type: mongoose.Schema.Types.Mixed,
          default: null,
        },
        status: Number,
        creator_type: {
          type: mongoose.Schema.Types.Mixed,
          default: null,
        },
        creator_id: {
          type: mongoose.Schema.Types.Mixed,
          default: null,
        },
        editor_type: {
          type: mongoose.Schema.Types.Mixed,
          default: null,
        },
        editor_id: {
          type: mongoose.Schema.Types.Mixed,
          default: null,
        },
        deleted_at: {
          type: mongoose.Schema.Types.Mixed,
          default: null,
        },
        created_at: {
          type: mongoose.Schema.Types.Mixed,
          default: null,
        },
        updated_at: {
          type: mongoose.Schema.Types.Mixed,
          default: null,
        },
        convert_price: Number,
        currency_price: String,
        flat_price: String,
        item_attribute: {
          id: Number,
          name: String,
          status: Number,
          creator_type: {
            type: mongoose.Schema.Types.Mixed,
            default: null,
          },
          creator_id: {
            type: mongoose.Schema.Types.Mixed,
            default: null,
          },
          editor_type: {
            type: mongoose.Schema.Types.Mixed,
            default: null,
          },
          creator_id: {
            type: mongoose.Schema.Types.Mixed,
            default: null,
          },
          created_at: Date,
          updated_at: Date,
        },
      },
    ],
  },
  itemAttributes: [
    {
      id: Number,
      name: String,
      status: Number,
    },
  ],
  extras: [],
  addons: [
    {
      id: Number,
      item_id: Number,
      item_addon_id: Number,
      item_name: String,
      addon_item_price: String,
      addon_item_flat_price: String,
      addon_item_convert_price: Number,
      addon_item_currency_price: String,
      addon_item_status: Number,
      variations: {},
      variation_total: Number,
      variation_total_flat_price: String,
      variation_total_convert_price: Number,
      variation_total_currency_price: String,
      total: Number,
      total_flat_price: String,
      total_convert_price: Number,
      total_currency_price: String,
      variation_names: [],
      thumb: String,
      cover: String,
      preview: String,
      caution: String,
      offer: [],
    },
  ],
  offer: [],
});

const PopularItems = mongoose.model("PopularItems", popularItemsSchema);
module.exports = PopularItems;
