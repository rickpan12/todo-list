const getAllTasks = (req,res) => {
    res.send('Get all Tasks')
}

const createTask = (req,res) => {
    res.send('post Task')
}


const getTask = (req,res) => {
    res.send('get single task')
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