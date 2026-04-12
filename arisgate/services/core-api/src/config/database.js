// Import mongoose for MongoDB object modelling
const mongoose = require("mongoose");

/**
 * Connects the ArisGate backend to MongoDB Atlas.
 * The connection string is read from the MONGO_URI
 * environment variable stored in the .env file.
 */
const connectDatabase = async () => {
  try {
    // Temporary debug output to confirm that the environment variable is loaded
    console.log("ENV CHECK:", process.env.MONGO_URI);

    // Attempt MongoDB connection
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected successfully");
  } catch (error) {
    // Log a readable database connection error
    console.error("Database connection error:", error.message);

    // Stop the process if the database cannot be reached
    process.exit(1);
  }
};

// Export the connection function so server.js can use it
module.exports = connectDatabase;