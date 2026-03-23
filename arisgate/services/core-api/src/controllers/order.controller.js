const Order = require("../models/order.model");

exports.startVerification = async (req, res) => {
  try {
    const orderData = req.body;

    console.log("Incoming order verification:", orderData);

    // Save to database
    const order = await Order.create(orderData);

    res.json({
      status: "verification_started",
      orderId: order._id,
      message: "ArisGate verification initiated",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Internal verification error",
    });
  }
};
