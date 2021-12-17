const router = require('express').Router();
const { Recipes, User } = require('../models/');
const withAuth = require('../utils/auth');

// given a cuisine, return all recipes with that cuisine
// parameter needed is cuisine

// get all recipes for cuisine search
router.get('/', withAuth, async (req, res) => {
  try {
    const recipesData = await Recipes.findAll({
      where: {
        cuisine: res.params.cuisine
      }
    });
    res.status(200).json(recipesData);
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
