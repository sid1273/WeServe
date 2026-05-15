const mongoose = require("mongoose");
const Restaurant = require("./Restaurant");
const menuItemSchema = new mongoose.Schema(
  {
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      res: "Restaurant",
    },

    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    price: {
      type: Number,
      required: true,
    },

    isVeg: {
      type: String,
      default: false,
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  {
    timeStamps: true,
  },
);

module.exports = mongoose.model("MenuItem", menuItemSchema);
