// Create web server

// Import modules
const express = require('express');
const router = express.Router();

// Import controllers
const commentsController = require('../controllers/comments.controller');

// Import middleware
const authMiddleware = require('../middlewares/auth.middleware');

// Import validators
const commentsValidator = require('../validators/comments.validator');

// Import helpers
const helpers = require('../helpers/helpers');

// Create routes
router.get('/', authMiddleware.loginRequired, commentsController.index);
router.post('/', authMiddleware.loginRequired, commentsValidator.validateCreateComment, commentsController.createComment);
router.post('/delete', authMiddleware.loginRequired, commentsValidator.validateDeleteComment, commentsController.deleteComment);
router.post('/update', authMiddleware.loginRequired, commentsValidator.validateUpdateComment, commentsController.updateComment);

// Export module
module.exports = router;
