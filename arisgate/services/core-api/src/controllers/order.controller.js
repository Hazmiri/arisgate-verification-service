const { generateOtpCode } = require("../services/otp.service");

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
