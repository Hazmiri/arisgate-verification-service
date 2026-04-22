const express = require("express");
const router = express.Router();

const orderController = require("../controllers/order.controller");

// Start verification and create order
router.post("/verify", orderController.startVerification);

// Generate and send simulated OTP
router.post("/:id/send-otp", orderController.sendOtp);

// Confirm OTP
router.post("/:id/confirm-otp", orderController.confirmOtp);

// Fetch a single order by ID
router.get("/:id", orderController.getOrderById);

module.exports = router;