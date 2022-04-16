const mongoose = require('mongoose')

//connect to mongodb
const connectDB = (url) => {
    return mongoose
    .connect(url)
    .then(console.log('DB connection successful'))
}

module.exports = connectDB


