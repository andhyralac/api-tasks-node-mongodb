const { Router } = require('express')
const routes = Router()



routes.use('/users', require('../../components/user/routes'))
routes.use('/tasks', require('../../components/task/routes'))







module.exports = routes