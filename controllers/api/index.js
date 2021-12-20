const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const recipeRoutes = require('./recipe-routes');
const cookbookRoutes = require('./cookbook-routes');

router.use('/user', userRoutes);
router.use('/recipe', recipeRoutes);
router.use('/cookbook', cookbookRoutes);

module.exports = router;