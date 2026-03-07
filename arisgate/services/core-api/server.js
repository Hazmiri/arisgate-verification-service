//Load environment variables from .env file
require("dontenv").config();
//Import the Express application
const app = require("./src/app");
//Define the port the server will run on
const Port = process.env.PORT || 4000;
//Start the server
app.listen(Port, () => {
  console.log("ArisGate API running on port ${PORT}");
})