const { check } = require('express-validator')

const validateResult = require('../../../shared/lib/handleValidator')
const UserService = require('../service')



const emailExists = async (value) => {
    const user = await UserService.getOne({email:value})
    if (user) {
        throw new Error(`Email is in use: ${value}`)
    }
}





const validateUserObjectDataCreate = [
    check('full_name')
        .notEmpty()
        .withMessage('Fullname is required'),
    check('email')
        .normalizeEmail()
        .isEmail()
        .withMessage('Is not email valid')
        .custom(emailExists),
    check('password')
        .notEmpty()
        .withMessage('Password is required'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]









module.exports = {
    validateUserObjectDataCreate
}