const { check } = require('express-validator')

const validateResult = require('../../../shared/lib/handleValidator')


const validateAuthObjectData = [
    check('email')
        .normalizeEmail()
        .isEmail()
        .withMessage('Is not email valid'),
    check('password')
        .notEmpty()
        .withMessage('Password is required'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]





module.exports = {
    validateAuthObjectData
}