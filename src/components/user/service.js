const UserModel = require('./model')
const handlePassword = require('../../shared/lib/handlePassword')
const handleToken = require('../../shared/lib/handleToken')


/**
 *  funcion para crear usuario y devuelve el token
 * @param {*} user 
 * @returns {string} token
 */
const createUser = async (user) => {
    const encryptedPassword = handlePassword.encrypt(user.password)
    user.password = encryptedPassword

    const createdUser = await UserModel.create(user)
    const token = handleToken.sing(createdUser)

    return token
}


/**
 *  funcion para realizar la consulta de un usuario
 * @param {Object} object 
 * @returns {user}
 */
const getOneUser = async (object) => {
    return await UserModel.findOne(object).exec()
}



/**
 * funcion para obtener un usuario por ID
 * @param {ObjectId} userId 
 * @returns {user}
 */
const getUserById = async (userId) => {
    return await UserModel.findById(userId).exec()

}








module.exports = {
    create: createUser,
    getOne: getOneUser,
    getById: getUserById
}