const mongoose = require('mongoose')

const connectDB = (url) => {
    mongoose
    .connect(url)
    .then(console.log('DB connection successful'))
}

module.exports = connectDB

    
    // .catch((error)=> {console.log(error)})
