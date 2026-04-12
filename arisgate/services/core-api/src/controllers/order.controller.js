// Import the Order model to interact with MongoDB
const Order = require("../models/order.model");

/**
 * Starts the verification process for a Cash-on-Delivery order.
 *
 * Current responsibilities:
 * - Receive request data from the client
 * - Apply basic rule-based risk scoring
 * - Store the verification session in MongoDB
 * - Return a JSON response with order ID and score
 */
exports.startVerification = async (req, res) => {
  try {
    // Extract customer input from the request body
    const { name, phone, address } = req.body;

    console.log("Incoming order verification:", req.body);

    // Initialise risk score
    let riskScore = 0;

    /**
     * Rule 1:
     * Missing or very short phone numbers are treated as high risk
     */
    if (!phone || phone.length < 10) {
      riskScore += 50;
    }

    /**
     * Rule 2:
     * Missing or very short addresses are treated as medium risk
     */
    if (!address || address.length < 5) {
      riskScore += 30;
    }

    /**
     * Rule 3:
     * Very short names may indicate poor-quality or suspicious order input
     */
    if (!name || name.length < 3) {
      riskScore += 20;
    }

    // Create and save the order document in MongoDB
    const order = await Order.create({
      name,
      phone,
      address,
      riskScore
    });

    // Send successful verification response
    res.json({
      status: "verification_started",
      orderId: order._id,
      riskScore: order.riskScore,
      message: "ArisGate verification initiated"
    });
  } catch (error) {
    // Log the full backend error for debugging
    console.error("Verification Error:", error);

    // Return safe error message to the client
    res.status(500).json({
      error: error.message
    });
  }
};