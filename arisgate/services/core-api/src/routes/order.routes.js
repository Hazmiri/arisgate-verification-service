// Import Express router
const express = require("express");

// Create router instance
const router = express.Router();

// Import controller functions
const orderController = require("../controllers/order.controller");

/**
 * POST /v1/orders/verify
 * Starts the verification workflow for a COD order
 */
router.post("/verify", orderController.startVerification);

// Export router so it can be registered in app.js
module.exports = router;