const { Schema, Types, model } = require('mongoose')

const taskSchema = new Schema({
    description: {
        type: String,
        required: [true, 'full name is required']
    },
    user: {
        type: Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: Boolean,
        default: true
    }
},{
    timestamps: true,
    versionKey: false
})


module.exports = model('Task', taskSchema)