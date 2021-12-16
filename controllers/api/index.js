const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const recipesRoutes = require('./recipes-routes');
const weekRoutes = require('./week-routes');

router.use('/user', userRoutes);
router.use('/recipes', recipesRoutes);
router.use('/week', weekRoutes);

module.exports = router;