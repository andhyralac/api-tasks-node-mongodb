const { Router } = require('express')
const router = Router()

const userController = require('./controller')
const userValidators = require('./validator/user.validators')


//ruta post para la creacion de usuario
router.post('/', userValidators.validateUserObjectDataCreate, userController.createUser)













module.exports = router