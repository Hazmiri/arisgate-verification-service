const mongoose = require("mongoose");

/**
 * Connects the ArisGate backend to MongoDB Atlas.
 */
const connectDatabase = async () => {
  try {
    console.log("ENV CHECK:", process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected successfully");
    console.log(
      "Connected database name:",
      mongoose.connection.db.databaseName,
    );
  } catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDatabase;
