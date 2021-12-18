const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const recipeRoutes = require('./recipe-routes');

router.use('/user', userRoutes);
router.use('/recipe', recipeRoutes);

module.exports = router;