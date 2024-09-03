const { ObjectId } = require('mongoose').Types
const User  = require('../models/User')

module.exports = {
    // Get all users
    async getUsers(req, res) {
        try {
            const users = await User.find()
            res.json(users)
        } catch (err) {
            console.log(err)
            return res.status(500).json(err)
        }
    },

    // Get a single user
    async getSingleUser(req, res) {
        try{
            const user = await User.findOne({ _id: req.params.userId})
                .select('-__v')
                .populate('thoughts')
            
            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' })
            }

            res.json(user)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    // Create new user
    async createUser(req, res) {
        try {
            const dbUserData = await User.create(req.body)
            res.json(dbUserData)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    // Update user
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            )

            if (!user) {
                return res.status(404).json({ message: 'No user with this id!' })
            }

            res.json(user)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    // Delete user
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndRemove({ _id: req.params.userId })

            if (!user) {
                return res.status(404).json({ message: 'No user with this id!' })
            }

            res.json({ message: 'User successfully deleted' })
        } catch (err) {
            res.status(500).json(err)
        }
    }
}