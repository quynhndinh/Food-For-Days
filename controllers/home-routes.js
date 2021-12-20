const router = require('express').Router();
const { Recipe } = require('../models');
const path = require('path');
// const withAuth = require('../utils/auth');

// given a cuisine, return all recipes with that cuisine
// parameter needed is cuisine

// get all recipes for cuisine search
// can get cuisine without logging in
// Endpoint: /

router.get('/', (req, res) => {
  console.log("GET /");
  res.sendFile(path.join(__dirname, '../public/index.html'))
})


router.get('/cuisine', async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      where: {
        cuisine: req.body.cuisine
      }
    });
    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Endpoint: /login
// router.get('/login', (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }
// });

// // Endpoint: /signup
// router.get('/signup', (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }
// });

router.get('/logout', (req, res) {
  req.logout();
  req.session.destroy();
  res.redirect('/')
})
module.exports = router;