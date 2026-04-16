// Import the Order model to interact with MongoDB
const Order = require("../models/order.model");

// Import the risk scoring service
const { calculateRiskScore } = require("../services/risk.service");

/**
 * Starts the verification process for a Cash-on-Delivery order.
 *
 * Current responsibilities:
 * - Receive request data from the client
 * - Delegate risk calculation to the risk service
 * - Store the verification session in MongoDB
 * - Return a JSON response with order ID and score
 */
exports.startVerification = async (req, res) => {
  try {
    // Extract customer input from the request body
    const { name, phone, address } = req.body;

    console.log("Incoming order verification:", req.body);

    // Calculate risk score using the dedicated service
    const riskScore = calculateRiskScore({ name, phone, address });

    // Create and save the order document in MongoDB
    const order = await Order.create({
      name,
      phone,
      address,
      riskScore,
    });

    // Debug proof that MongoDB saved the document
    console.log("Saved order:", order);

    // Send successful verification response
    res.json({
      status: "verification_started",
      orderId: order._id,
      riskScore: order.riskScore,
      message: "ArisGate verification initiated",
    });
  } catch (error) {
    // Log the full backend error for debugging
    console.error("Verification Error:", error);

    // Return safe error message to the client
    res.status(500).json({
      error: error.message,
    });
  }
};
