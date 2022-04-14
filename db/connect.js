const mongoose = require('mongoose')

const CONNECTION_URL = 'mongodb+srv://admin:admin@cluster0.2b0b7.mongodb.net/ToDoList?retryWrites=true&w=majority'

mongoose
    .connect(CONNECTION_URL)
    .then(()=> {console.log('connected to the DB')})
    .catch((error)=> {console.log(error)})
