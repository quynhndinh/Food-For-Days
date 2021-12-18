const router = require('express').Router();
const { Recipe } = require('../models/');
const withAuth = require('../utils/auth');

// given a cuisine, return all recipes with that cuisine
// parameter needed is cuisine

// get all recipes for cuisine search
// URL: /api
router.get('/', withAuth, async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      where: {
        cuisine: res.params.cuisine
      }
    });
    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
