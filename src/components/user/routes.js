const { Router } = require('express')
const router = Router()

const userController = require('./controller')



//ruta post para la creacion de usuario
router.post('/', userController.createUser)













module.exports = router