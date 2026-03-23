require("dotenv").config();

const app = require("./src/app");
const connectDatabase = require("./src/config/database");

const PORT = process.env.PORT || 4000;

connectDatabase();

app.listen(PORT, () => {
  console.log(`ArisGate API running on port ${PORT}`);
});
