const { check } = require('express-validator')

const validateResult = require('../../../shared/lib/handleValidator')



const validateTaskObjectDataCreate = [
    check('task')
        .notEmpty()
        .withMessage('Description task is required'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]


const validateTaskObjectDataUpdate = [
    check('id')
        .isMongoId()
        .withMessage('The ID is not valid'),
    check('newTask')
        .notEmpty()
        .withMessage('Description task is required'),
    (req, res, next) => {
            validateResult(req, res, next)
        }
]


const validateTaskObjectDataDelete = [
    check('taskId')
        .isMongoId()
        .withMessage('The ID is not valid'),
    (req, res, next) => {
            validateResult(req, res, next)
        }
]






module.exports = {
    validateTaskObjectDataCreate,
    validateTaskObjectDataUpdate,
    validateTaskObjectDataDelete
}