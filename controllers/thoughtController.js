const { Thought } = require('../models/Thought')

module.exports = {
    // Get all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find()
            res.json(thoughts)
        } catch (err) {
            return res.status(500).json(err)
        }
    },

    // Get single thought
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId })

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that Id'})
            }

            res.json(thought)
        } catch (err) {
            res.status(500).json(err)
        }
    },
}