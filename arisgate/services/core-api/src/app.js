const express = require("express")
const cors = require("cors")

const orderRoutes = require("./routes/order.routes")

const app = express()

app.use(cors())
app.use(express.json())

app.use(express.json())

app.use("/v1/orders", orderRoutes)

module.exports = app