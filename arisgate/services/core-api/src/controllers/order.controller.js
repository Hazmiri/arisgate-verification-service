// Import the Order model to interact with MongoDB
const Order = require("../models/order.model");

// Import the risk scoring service
const { calculateRiskScore } = require("../services/risk.service");

//Import the address validation service
const { validateAddress } = require("../services/lbs.service");

// Import the OTP service
const { generateOtpCode } = require("../services/otp.service");

/**
 * Starts the verification process for a Cash-on-Delivery order.
 */
exports.startVerification = async (req, res) => {
  try {
    const { name, phone, address } = req.body;

    console.log("Incoming order verification:", req.body);

    const riskScore = calculateRiskScore({ name, phone, address });

    const { addressValidation, locationConfidence } = validateAddress(address);

    const order = await Order.create({
      name,
      phone,
      address,
      riskScore,
      addressValidation,
      locationConfidence,
    });

    console.log("Saved order:", order);
    console.log("Collection used:", Order.collection.name);

    res.json({
      status: "verification_started",
      orderId: order._id,
      riskScore: order.riskScore,
      addressValidation: order.addressValidation,
      locationConfidence: order.locationConfidence,
      message: "ArisGate verification initiated",
    });
  } catch (error) {
    console.error("Verification Error:", error);

    res.status(500).json({
      error: error.message,
    });
  }
};

/**
 * Generates and stores a simulated OTP code for an existing order.
 */
exports.sendOtp = async (req, res) => {
  try {
    const { id } = req.params;

    const otpCode = generateOtpCode();

    const order = await Order.findByIdAndUpdate(
      id,
      {
        otpCode,
        status: "otp_sent",
      },
      { new: true },
    );

    if (!order) {
      return res.status(404).json({
        error: "Order not found",
      });
    }

    console.log("Generated OTP for order:", id, otpCode);

    res.json({
      message: "OTP generated successfully",
      orderId: order._id,
      otpCode: order.otpCode,
      status: order.status,
    });
  } catch (error) {
    console.error("OTP Send Error:", error);

    res.status(500).json({
      error: error.message,
    });
  }
};

/**
 * Confirms whether the submitted OTP matches the stored code.
 */
exports.confirmOtp = async (req, res) => {
  try {
    const { id } = req.params;
    const { otpCode } = req.body;

    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({
        error: "Order not found",
      });
    }

    if (order.otpCode !== otpCode) {
      return res.status(400).json({
        message: "Invalid OTP",
        otpVerified: false,
      });
    }

    order.otpVerified = true;
    order.status = "otp_verified";

    await order.save();

    res.json({
      message: "OTP verified successfully",
      orderId: order._id,
      otpVerified: order.otpVerified,
      status: order.status,
    });
  } catch (error) {
    console.error("OTP Confirm Error:", error);

    res.status(500).json({
      error: error.message,
    });
  }
};

/**
 * Returns a single order document by ID.
 * This is useful for checking verification state after each workflow step.
 */
exports.getOrderById = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({
        error: "Order not found",
      });
    }

    res.json({
      orderId: order._id,
      name: order.name,
      phone: order.phone,
      address: order.address,
      riskScore: order.riskScore,
      status: order.status,
      otpVerified: order.otpVerified,
      otpCode: order.otpCode,
    });
  } catch (error) {
    console.error("Get Order Error:", error);

    res.status(500).json({
      error: error.message,
    });
  }
};
