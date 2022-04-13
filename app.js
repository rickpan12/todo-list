const express = require('express')
const app = express()

const PORT = 3000

//routes
app.get('/', (req,res)=> {
    res.send('To do list')
})


app.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}...`)
})
