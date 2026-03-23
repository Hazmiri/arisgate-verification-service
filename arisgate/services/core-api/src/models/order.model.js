const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      default: "verification_started",
    },

    riskScore: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

// THIS LINE IS THE MOST IMPORTANT
module.exports = mongoose.model("Order", orderSchema);
