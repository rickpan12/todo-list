const express = require('express')
const router = express.Router()

//get functions from controllers file
const {getAllTasks,createTask, getTask, updateTask, deleteTask} = require('../controllers/tasks.js')

//chain HTTP requests 
router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)


module.exports = router