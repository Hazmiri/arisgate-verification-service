// Import mongoose for schema and model creation
const mongoose = require("mongoose");

/**
 * Schema for a Cash-on-Delivery verification session.
 * Each document represents one order submitted to ArisGate
 * for validation and risk assessment.
 */
const orderSchema = new mongoose.Schema(
  {
    // Customer full name
    name: {
      type: String,
      required: true
    },

    // Customer phone number for future OTP verification
    phone: {
      type: String,
      required: true
    },

    // Delivery address entered by the customer
    address: {
      type: String,
      required: true
    },

    // Current verification lifecycle status
    status: {
      type: String,
      default: "verification_started"
    },

    // Rule-based fraud / quality score
    riskScore: {
      type: Number,
      default: 0
    }
  },
  {
    // Automatically adds createdAt and updatedAt timestamps
    timestamps: true
  }
);

// Export the Mongoose model
module.exports = mongoose.model("Order", orderSchema);