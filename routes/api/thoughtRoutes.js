const router = require('express').Router()
const {
    getSingleThought,
    getThoughts,
    createThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thoughtController')

router.route('/').get(getThoughts).post(createThought)

router.route('/:thoughtId').get(getSingleThought).post(updateThought).delete(deleteThought)

module.exports = router