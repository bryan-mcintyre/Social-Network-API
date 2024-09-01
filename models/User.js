const { Schema, model } = require('mongoose')
const thoughtSchema = require('./Thought')

// Schema to create User model
const userSchema = new Schema(
    {
        username: { type: String, required: true },
        email: { type: String, required: true },
        thoughts: [thoughtSchema]
    },
)

const User = model('user', userSchema)

module.exports = User