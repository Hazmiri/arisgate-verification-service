// Import core libraries
const express = require("express");
const cors = require("cors");

// Import route modules
const orderRoutes = require("./routes/order.routes");

// Create Express application instance
const app = express();

// Enable Cross-Origin Resource Sharing
// This allows frontend applications or external connectors
// such as Shopify and WooCommerce to call this API
app.use(cors());

// Enable parsing of incoming JSON request bodies
app.use(express.json());

// Register order-related routes under the versioned API namespace
app.use("/v1/orders", orderRoutes);

// Export the configured app for use in server.js
module.exports = app;