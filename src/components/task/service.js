const TaskModel = require('./model')




/**
 *  Funcion para crear tarea
 * @param {string} task 
 * @returns {*} task
 */
const createTask = async (task) => {
    return await TaskModel.create(task)
}



/**
 * Funcion para obtener toda las tareas creadas por el usuario
 * @param {ObjectId} userId 
 * @returns {tasks}
 */
const getTaskByUser = async (userId) => {
    return await TaskModel.find({ user: userId, status: true }, { createdAt: 0 }).populate('user', 'full_name').exec()
}


/**
 * Funcion para actualizar la tarea
 * @param {ObjectId} taskId
 * @param {string} newTask 
 * @returns {task}
 */
const updateTask = async (taskId, newTask) => {
    return await TaskModel.findByIdAndUpdate({ _id: taskId}, { description: newTask }, { new: true }).exec()
}


/**
 * Funcion para eliminar task
 * @param {ObjectId} taskId 
 * @returns {task}
 */
const deleteTask = async (taskId) => {
    return await TaskModel.findByIdAndUpdate({ _id: taskId }, { status: false }, { new: true }).exec()
}



module.exports = {
    create: createTask,
    getTasks: getTaskByUser,
    update: updateTask,
    delete: deleteTask
}