const Thought  = require('../models/Thought')
const User = require('../models/User')

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

    // Create thought
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body)
            const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: { thoughts: thought.id } },
                { new: true },
            )

            if(!user) {
                return res
                    .status(404)
                    .json({ message: 'Thought created, but no user found with that ID '})
            }
            res.json(thought)
        } catch(err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    // Update thought
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { new: true }
            )
        } catch(err) {
            res.status(500).json(err)
        }
    },

    // Delete thought
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndRemove({ _id: req.params.thoughtId })

            if(!thought) {
                return res.status(404).json({ message: 'No thought found with that ID' })
            }

            res.json({ message: 'Thought successfully removed' })
        } catch(err) {
            res.status(500).json(err)
        }
    }
}