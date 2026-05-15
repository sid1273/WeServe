const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },

  items: [
    {
      menuItem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MenuItem",
        require: true,
      },

      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
    },
  ],

  totalPrice:{
    type:Number,
    required: true,
  },

  status:{
    type: String,
    enum :[
        "Pending",
        "Accepted",
        "Preparing",
        "Ready",
        "Completed",
        "Cancelled"
    ],
    default: "Pending",
  }
},
{
    timestamps: true,
});

module.exports = mongoose.model(
    "Order", orderSchema
)
