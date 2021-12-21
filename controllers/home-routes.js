const router = require('express').Router();
const { Recipe } = require('../models');
const path = require('path');
// const withAuth = require('../utils/auth');


// get homepage
// Endpoint: /

router.get('/', (req, res) => {
  console.log("GET /");
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = router;