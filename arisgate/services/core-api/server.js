// Load environment variables from the .env file
require("dotenv").config({ path: ".env" });

// Import the configured Express application
const app = require("./src/app");

// Import the database connection function
const connectDatabase = require("./src/config/database");

// Define the port for the API server
// If no PORT is provided in the environment, default to 4000
const PORT = process.env.PORT || 4000;

// Connect to MongoDB before starting the server
connectDatabase();

// Start the Express server
app.listen(PORT, () => {
  console.log(`ArisGate API running on port ${PORT}`);
});
