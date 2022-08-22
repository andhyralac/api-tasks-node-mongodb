const { request, response } = require('express')
const AuthService = require('./service')
const HttpResponse = require('../../shared/response/response')


const Auth = async (req = request, res = response) => {
    try {
        const { email, password } = req.body

        const result = await AuthService.Login(email, password)
        if (result.error !== '') {
            return HttpResponse.BadRequest(res, result.error)
        }

        return HttpResponse.Ok(res, { Token: result.token})

    } catch ( error ) {
        HttpResponse.Error(res, error)
    }
}






module.exports = {
    Auth
}