const express = require('express')
const app = express()
const tasks = require('./routes/tasks.js')

//middleware
app.use(express.json())
app.use('/api/v1/tasks', tasks)

const PORT = 3000

app.get('/home', (req,res) => {
    res.send('Home')
})


app.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}...`)
})
