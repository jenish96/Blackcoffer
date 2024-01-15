const mongoose = require("mongoose")
require("dotenv").config()

const mongoDB = mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Database Connected')
})

module.exports = mongoDB