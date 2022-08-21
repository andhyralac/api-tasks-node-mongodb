const jwt = require('jsonwebtoken')
const environmentVariable = require('../../config/environment')


/**
 * funcion para generar el token
 * @param {*} user 
 * @returns {token}
 */
const tokenSing = (user) => {

    const payload = {
        id: user._id,
        email: user.email
    }

    return jwt.sign(payload, environmentVariable.JWT_SECRET, {
        expiresIn: '4h'
    })

}



/**
 * funcion para verificar el token
 * @param {string} token 
 * @returns {JwtPayload} JwtPayload or null 
 */
const verifyToken = async (token) => {
    try {
        return jwt.verify(token, environmentVariable.JWT_SECRET)
    } catch (error) {
        throw new Error(error)
    }
}





module.exports = {
    sing: tokenSing,
    verify: verifyToken
}