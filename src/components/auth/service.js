const UserService = require('../user/service')
const handlePassword = require('../../shared/lib/handlePassword')
const handleToken = require('../../shared/lib/handleToken')



/**
 * Funcion para loguear al usuario
 * @param {string} email 
 * @param {string} password 
 * @returns {object} data
 */
const Login = async (email, password) => {
    const data = {
        error: '',
        token: ''
    }

    const user = await UserService.getOne({ email: email, status: true }, { updatedAt: 0, createdAt:0 })
    if (!user) {
        data.error = 'User not valid'
        return data
    }

    const verifyPassword = handlePassword.compare(password, user.password)
    if (!verifyPassword) {
        data.error = 'Password not valid'
        return data
    } 

    data.token = handleToken.sing(user)

    return data
}





module.exports = {
    Login
}