require("dotenv").config()

const app = require("./src/app")

// Import database connector
const connectDatabase = require("./src/config/database")

const PORT = process.env.PORT || 4000

// Connect to MongoDB
connectDatabase()

// Start API server
app.listen(PORT, () => {

    console.log(`ArisGate API running on port ${PORT}`)

})