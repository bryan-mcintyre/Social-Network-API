const { Schema, model} = require('mongoose')

// Schema to create Thought schema
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user'
            }
        ]
    }
)

const Thought = model('thought', thoughtSchema)

module.exports = Thought