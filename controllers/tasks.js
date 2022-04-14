const getAllTasks = (req,res) => {
    res.send('Get all Tasks')
}

const createTask = (req,res) => {
    res.json(req.body)
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