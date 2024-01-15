const express = require("express")
const { getItems, getSearchItems } = require("../controller/Items")

const app = express()

app.get("/", getItems)
app.get("/filter", getSearchItems)

module.exports = app