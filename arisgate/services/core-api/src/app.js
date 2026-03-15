//Import required libraries
const express = require("express");
const cors = require("cors");

// Import routes
const orderRoutes = require("./routes/order.routes");

// Create Express application
const app = express();

// Enable CORS so frontend apps can call the API
app.use(cors());

// Parse JSON body requests
app.use(express.json());

// Register routes
app.use("/v1/orders", orderRoutes);

// Export app so server.js can start it
module.exports = app;
