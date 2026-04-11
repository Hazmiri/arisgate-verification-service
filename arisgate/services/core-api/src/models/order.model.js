// Import mongoose library for MongoDB interaction
const mongoose = require("mongoose");

// Define the schema for an Order document
// This represents a COD (Cash on Delivery) request within ArisGate
const orderSchema = new mongoose.Schema({

  // Customer full name
  name: {
    type: String,
    required: true
  },

  // Customer phone number (used for OTP verification later)
  phone: {
    type: String,
    required: true
  },

  // Delivery address provided at checkout
  address: {
    type: String,
    required: true
  },

  // Current verification status of the order
  status: {
    type: String,
    default: "verification_started"
  },

  // Risk score calculated based on validation rules
  // This will be used to detect potentially fraudulent orders
  riskScore: {
    type: Number,
    default: 0
  }

}, {
  // Automatically add createdAt and updatedAt timestamps
  timestamps: true
});

// Export the model so it can be used in controllers and services
module.exports = mongoose.model("Order", orderSchema);