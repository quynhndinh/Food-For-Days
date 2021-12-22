const router = require('express').Router();
const path = require('path');
const withAuth = require('../utils/auth');


// get homepage
// Endpoint: /

router.get('/', (req, res) => {
  // console.log("GET /");
  res.sendFile(path.join(__dirname, '../public/home.html'))
});

router.get('/cookbook', withAuth, (req, res) => {
  console.log("GET /cookbook");
  res.sendFile(path.join(__dirname, '../public/cookbook.html'));
});

module.exports = router;