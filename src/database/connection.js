const mongoose = require('mongoose')

const environmentVariable = require('../config/environment')




const connectDB = async () => {
    try {
        await mongoose.connect(environmentVariable.MONGO_URI)
        console.log('**** SUCCESSFUL CONNECTION ****')
    } catch ( error ) {
        console.log('**** CONNECTION ERROR ****')
    }
}



module.exports = connectDB