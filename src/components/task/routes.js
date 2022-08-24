const { Router } = require('express')
const router = Router()

const taskController = require('./controller')
const { checkAuth } = require('../../shared/middleware/auth')
const taskValidators = require('./validator/task.validators')


//ruta post para la creacion de tarea
router.post('/', [
    checkAuth,
    taskValidators.validateTaskObjectDataCreate
],taskController.createTask)




// ruta put para actualizar tarea
router.put('/:id', [
    checkAuth,
    taskValidators.validateTaskObjectDataUpdate
],taskController.updateTask)



// ruta para obtener todas las tareas del usuario
router.get('/', [
    checkAuth
],taskController.getTasksByUser)



// ruta para eliminar tarea
router.delete('/:taskId', [
    checkAuth,
    taskValidators.validateTaskObjectDataDelete
],taskController.deleteTask)







module.exports = router