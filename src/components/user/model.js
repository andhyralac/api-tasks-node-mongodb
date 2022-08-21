const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    full_name: {
        type: String,
        required: [true, 'full name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    status: {
        type: Boolean,
        default: true
    }
},{
    timestamps: true,
    versionKey: false
})


module.exports = model('User', userSchema)