const mongoose = require('mongoose')

const CONNECTION_URL = 'mongodb+srv://admin:admin@cluster0.2b0b7.mongodb.net/ToDoList?retryWrites=true&w=majority'

const connectDB = (url) => {
    mongoose
    .connect(CONNECTION_URL)
    .then(console.log('DB connection successful'))
}

module.exports = connectDB

    
    // .catch((error)=> {console.log(error)})
