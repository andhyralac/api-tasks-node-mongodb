const { Router } = require('express')
const router = Router()


const authController = require('./controller')




router.post('/', authController.Auth)

















module.exports = router