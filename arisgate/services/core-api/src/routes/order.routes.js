// Import Express router
const express = require("express")

const router = express.Router()

// Import controller
const orderController = require("../controllers/order.controller")

// Route for starting verification process
router.post("/verify", orderController.startVerification)

// Export router
module.exports = router