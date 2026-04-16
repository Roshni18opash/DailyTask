const express = require('express');
const router = express.Router();
const pollController = require('../controllers/pollController');
const { checkAuth, optionalAuth, checkAdmin } = require('../middleware/authMiddleware');

router.post('/', checkAuth, pollController.createPoll);
router.get('/', optionalAuth, pollController.getAllPolls);
router.get('/my', checkAuth, pollController.getMyPolls);
router.get('/:id', optionalAuth, pollController.getPollById);
router.post('/:id/vote', checkAuth, pollController.votePoll);

module.exports = router;
