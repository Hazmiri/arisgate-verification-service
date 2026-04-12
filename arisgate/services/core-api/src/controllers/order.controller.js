// Import Order model to interact with MongoDB
const Order = require("../models/order.model");

/**
 * Handles the initial verification process for a COD order.
 * This includes:
 * - Basic validation
 * - Risk scoring
 * - Persisting the order in the database
 */
exports.startVerification = async (req, res) => {

  try {

    // Extract user input from request body
    const { name, phone, address } = req.body;

    console.log("Incoming order verification:", req.body);

    // Initialise risk score
    let riskScore = 0;

    /**
     * Risk Rule 1:
     * Invalid or very short phone number increases risk
     */
    if (!phone || phone.length < 10) {
      riskScore += 50;
    }

    /**
     * Risk Rule 2:
     * Short or missing address increases risk
     */
    if (!address || address.length < 5) {
      riskScore += 30;
    }

    /**
     * Risk Rule 3:
     * Suspicious or too short name increases risk
     */
    if (!name || name.length < 3) {
      riskScore += 20;
    }

    // Create and store order in MongoDB
    const order = await Order.create({
      name,
      phone,
      address,
      riskScore
    });

    // Send response back to client
    res.json({
      status: "verification_started",
      orderId: order._id,
      riskScore: order.riskScore,
      message: "ArisGate verification initiated"
    });

  } catch (error) {

    // Log full error for debugging
    console.error("Verification Error:", error);

    // Send safe error response to client
    res.status(500).json({
      error: error.message
    });

  }

};