const router = require('express').Router();
const contentRoutes = require('./content');
const userRoutes = require('./user');

// Book routes
router.use('/content', contentRoutes);
router.use('/user', userRoutes);

module.exports = router;
