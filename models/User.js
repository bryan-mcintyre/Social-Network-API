const { Schema, model } = require('mongoose')
const thoughtSchema = require('./Thought')

// Schema to create User model
const userSchema = new Schema(
    {
        username: { type: String, required: true },
        email: { type: String, required: true },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought'
            }
        ]
    },
)

const User = model('user', userSchema)

module.exports = User