const express = require("express");
const router = express.Router();

const orderController = require("../controllers/order.controller");

/**
 * POST /v1/orders/verify
 * Starts the verification workflow for a COD order
 */
router.post("/verify", orderController.startVerification);

/**
 * POST /v1/orders/:id/send-otp
 * Generates and stores a simulated OTP for an order
 */
router.post("/:id/send-otp", orderController.sendOtp);

/**
 * POST /v1/orders/:id/confirm-otp
 * Confirms the OTP submitted by the user
 */
router.post("/:id/confirm-otp", orderController.confirmOtp);

module.exports = router;