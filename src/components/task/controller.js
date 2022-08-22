const { request, response } = require('express')
const TaskService = require('./service')
const HttpResponse = require('../../shared/response/response')



const createTask = async (req = request, res = response) => {
    try {
        const task = {
            description: req.body.task,
            user: req.user
        }

        const createdTask = await TaskService.create(task)

        return HttpResponse.Create(res, { task: createdTask})

    } catch ( error ) {
        HttpResponse.Error(res, error)
    }
}



const updateTask =  async (req = request, res = response) => {
    try {
        const { id } = req.params
        const { newTask } = req.body
        console.log(id);

        const updatedTask = await TaskService.update(id, newTask)

        return HttpResponse.Ok(res, { Updated_Task: updatedTask}) 

    } catch ( error ) {
        HttpResponse.Error(res, error)
    }
}



const getTasksByUser = async (req = request, res = response) => {
    try {
        const userId = req.user

        const tasksUser = await TaskService.getTasks(userId)

        return HttpResponse.Ok(res, { Tasks: tasksUser })

    } catch ( error ) {
        HttpResponse.Error(res, error)
    }
}



const deleteTask = async (req = request, res = response) => {
    try {
        const { taskId } = req.params

        const deletedTask = await TaskService.delete(taskId)

        if (deletedTask.status) {
            return HttpResponse.BadRequest(res, 'Deleted not task')
        }

        return HttpResponse.Ok(res, 'The task was deleted')

    } catch ( errror ) {
        HttpResponse.Error(res, errror)
    }
}









module.exports = {
    createTask,
    updateTask,
    getTasksByUser,
    deleteTask
}