const { request, response } = require('express')
const { validationResult } = require('express-validator')

const HttpResponse = require('../response/response')


const validateResult = (req = request, res = response, next) => {
    try {

        validationResult(req).throw()
        return next()

    } catch ( errors ) {
        HttpResponse.BadRequest(res, errors.array().map( error => {
            return {
                msg: error.msg,
                param: error.param
            }
        }))
    }
}




module.exports = validateResult