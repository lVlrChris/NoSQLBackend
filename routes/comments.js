const commentsController = require('../controllers/comments')
const express = require('express')
const validateId = require('../middleware/validateId')

const router = express.Router()

router.post('/:commentId?', commentsController.create)
router.delete('/:commentId', commentsController.delete)

module.exports = router