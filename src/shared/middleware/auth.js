const { request, response } = require('express')
const UserService = require('../../components/user/service')
const handleToken = require('../lib/handleToken')
const HttpResponse = require('../response/response')



const checkAuth = async (req = request, res = response, next) => {
    try {
        if (!req.header('x-token')) {
            return HttpResponse.Forbidden(res, 'TOKEN_NOT_ALLOWED')
        }

        const token = req.header('x-token')

        const tokenData = await handleToken.verify(token)
        if (!tokenData) {
            return HttpResponse.Unauthorized(res, 'TOKEN_NOT_ALLOWED')
        }

        const user = await UserService.getById(tokenData.id)

        if (!user || !user.status) {
            return HttpResponse.Unauthorized(res, 'TOKEN_DOES_NOT_ALLOW_ANY_USER')
        }
        req.user = user._id

        next()

    } catch(error) {
        HttpResponse.Error(res, error)
    }
}

module.exports = { 
    checkAuth
}