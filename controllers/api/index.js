const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const recipesRoutes = require('./recipes-route');

router.use('/user', userRoutes);
router.use('/recipes', recipesRoutes);

module.exports = router;