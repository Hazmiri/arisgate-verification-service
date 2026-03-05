require("dontenv").config();
const app = require("./src/app");
const Port = process.env.PORT || 4000;
app.listen(Port, () => {
  console.log("ArisGate API running on port ${PORT}");
})