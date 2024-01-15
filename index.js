const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const routes = require("./routes/index")
require("./config")
require("dotenv").config()

const app = express()
app.use("/api/v1/items", routes)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})