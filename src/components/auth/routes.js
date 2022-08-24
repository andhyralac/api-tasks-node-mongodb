const { Router } = require('express')
const router = Router()


const authController = require('./controller')
const authValidators = require('./validator/auth.validators')



router.post('/', [
    authValidators.validateAuthObjectData
],authController.Auth)

















module.exports = router