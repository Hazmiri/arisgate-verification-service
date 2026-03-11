//Load environment variables from .env file
require("dotenv").config()
//Import the Express application
const app = require("./src/app")
//Define the port the server will run on
const PORT = process.env.PORT || 4000
//Start the server
app.listen(PORT, () => {
  // correct template string using backticks
  console.log(`ArisGate API running on port ${PORT}`)
})
