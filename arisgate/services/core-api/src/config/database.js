// Imoprt mongoose ODM
const mongoose = require("mongoose");

// function responsible for connecting the application to MongoDB
const connectDagabase = async () => {
  try {
    // Attempt to connect using the URI from the environment file
    await mongoose.connect(Process.env.Mongo_URI);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);

    process.exit(1);
  }
};

// Export function

module.exports = connectDatabase;
