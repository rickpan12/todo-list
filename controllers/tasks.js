const Task = require('../models/task')


const getAllTasks = (req,res) => {
    res.send('Get all Tasks')
}

const createTask = async (req,res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json(task)
    }
    catch (error) {
        res.status(500).json({msg : "There was an error"})
    }

}


const getTask = (req,res) => {
    const {id} = req.params
    res.json({"ID" : id})
}


const updateTask = (req,res) => {
    res.send('update task')
}


const deleteTask = (req,res) => {
    res.send('Delete Task')
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask, 
    deleteTask,
}