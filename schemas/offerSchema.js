const mongoose = require("mongoose");

const offerItemsSchema = new mongoose.Schema({
  id: Number,
  name: String,
  slug: String,
  amount: String,
  flat_amount: String,
  convert_amount: Number,
  status: Number,
  image: String,
  convert_start_String: String,
  convert_end_String: String,
  start_String: Date,
  end_String: Date,
  items: [
    {
      id: Number,
      name: String,
      slug: String,
      item_category_id: Number,
      tax_id: Number,
      flat_price: String,
      convert_price: Number,
      currency_price: String,
      price: String,
      item_type: Number,
      is_featured: Number,
      status: Number,
      description: String,
      caution: String,
      order: Number,
      thumb: String,
      cover: String,
      preview: String,
      category_name: String,
      category: {
        id: Number,
        name: String,
        slug: String,
        description: String,
        status: Number,
        thumb: String,
        cover: String,
      },
      tax: {
        id: Number,
        name: String,
        code: String,
        tax_rate: String,
        type: { Number },
        status: Number,
      },
      variations: {
        3: [
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
              editor_id: {
                type: mongoose.Schema.Types.Mixed,
                default: null,
              },
              created_at: Date,
              updated_at: Date,
            },
          },
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
              editor_id: {
                type: mongoose.Schema.Types.Mixed,
                default: null,
              },
              created_at: Date,
              updated_at: Date,
            },
          },
        ],
        4: [
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
              editor_id: {
                type: mongoose.Schema.Types.Mixed,
                default: null,
              },
              created_at: Date,
              updated_at: Date,
            },
          },
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
              editor_id: {
                type: mongoose.Schema.Types.Mixed,
                default: null,
              },
              created_at: Date,
              updated_at: Date,
            },
          },
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
              editor_id: {
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
        {
          id: Number,
          name: String,
          status: Number,
        },
      ],
      extras: [
        {
          id: Number,
          item_id: Number,
          name: String,
          price: String,
          currency_price: String,
          flat_price: String,
          convert_price: Number,
          status: Number,
          item: String,
        },
        {
          id: Number,
          item_id: Number,
          name: String,
          price: String,
          currency_price: String,
          flat_price: String,
          convert_price: Number,
          status: Number,
          item: String,
        },
      ],
      addons: [
        {
          id: Number,
          item_id: Number,
          item_addon_id: Number,
          item_name: String,
          addon_item_name: String,
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
        {
          id: Number,
          item_id: Number,
          item_addon_id: Number,
          item_name: String,
          addon_item_name: String,
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
      offer: [
        {
          id: Number,
          name: String,
          amount: String,
          flat_price: String,
          convert_price: Number,
          currency_price: String,
        },
      ],
    },
  ],
});

const OfferItems = mongoose.model("OfferItems", offerItemsSchema);
module.exports = OfferItems;
