const { request, response } = require('express')
const UserService = require('./service')
const HttpResponse = require('../../shared/response/response')



const createUser = async (req = request, res = response) => {
    try {
        const user = {
            full_name: req.body.full_name,
            email: req.body.email,
            password: req.body.password
        }

        const tokenUser = await UserService.create(user)
        return HttpResponse.Create(res, { token: tokenUser })

    } catch (error) {
        console.log(error);
    }
}








module.exports = {
    createUser
}