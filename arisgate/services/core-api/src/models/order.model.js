const mongoose = require ("mongoose")

// Schema describing a COD verifivation request
const orderSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },

  phone: {
    type: String,
    required: true
  },

  addres: {
    type: String,
    required: true
  },

  status: {
    type: String,
    default: "verification_started"
  },

  riskScore: {
    type: Number,
    default: 0
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
})

// Create model
const Order = mongoose.model("Order", orderSchema)

module.export = Order