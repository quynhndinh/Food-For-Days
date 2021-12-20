/*
----------------------------------------------------------------
1. Tricks to create express routes are to create index.js files for endpoint routing.

2. In each sub folder, we create index.js to specify endpoint routes.

3. We require testRoutes.js file to demonstrate how to create an empty routing files as place
holders for endpoint routing.
----------------------------------------------------------------
*/

const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-html');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
