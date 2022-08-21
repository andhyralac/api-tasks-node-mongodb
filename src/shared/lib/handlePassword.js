const bcryptjs = require('bcryptjs')




/**
 * funcion para cifrar la contraseña
 * @param {string} text 
 * @returns {string}
 */
const encrypt = (text) => {
    const salt = bcryptjs.genSaltSync()
    return bcryptjs.hashSync(text, salt)
}



/**
 * funcion para comprar las contraseña cifrada
 * con la contraseña no cifrada
 * @param {string} passwordPlain 
 * @param {string} hashPassword 
 * @returns {boolean}
 */
const compare = (passwordPlain, hashPassword) => {
    return bcryptjs.compareSync(passwordPlain, hashPassword)
}




module.exports = {
    encrypt,
    compare
}