const router = require('express').Router();
const { Recipe } = require('../models/');
const withAuth = require('../utils/auth');

// given a cuisine, return all recipes with that cuisine
// parameter needed is cuisine

// get all recipes for cuisine search
// Endpoint: /
router.get('/cuisine', withAuth, async (req, res) => {
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

// router.get('/cuisine', withAuth, async (req, res) => {
//   try {
//     const cuisineData = await Post.findAll({
//       where: {
//           cuisine: req.body.cuisine
//       },
//     });

//     const cuisine = cuisineData.map((cuisine) => cuisine.get({ plain: true }));

//     res.render('all-cuisine', {
//       layout: 'dashboard',
//       cuisine,
//     });
//   } catch (err) {
//     res.redirect('login');
//   }
// });



// Endpoint: /login
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// Endpoint: /signup
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;