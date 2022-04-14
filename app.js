require('dotenv').config()
const express = require('express')
const app = express()
const tasks = require('./routes/tasks.js')
//connect DB
const connectDB = require('./db/connect')


//middleware
app.use(express.json())
app.use('/api/v1/tasks', tasks)

const PORT = 3000

app.get('/home', (req,res) => {
    res.send('Home')
})

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, ()=> {
            console.log(`Server listening on port ${PORT}...`)
        })
    }
    catch (error) {
        console.log(error)
    }
}

start()



