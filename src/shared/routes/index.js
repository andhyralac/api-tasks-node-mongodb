const { Router } = require('express')
const routes = Router()



routes.use('/users', require('../../components/user/routes'))








module.exports = routes