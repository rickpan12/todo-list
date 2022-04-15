const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, 'must provide name'],
        maxlength : [30, 'name must not exceed 30 chars'] 
    },
    completed: {
        type: Boolean,
        default : false
    }
})



module.exports = mongoose.model('Task', TaskSchema )