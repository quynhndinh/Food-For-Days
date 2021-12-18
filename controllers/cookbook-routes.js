const router = require('express').Router();
const { Recipe, User } = require('../models');
const withAuth = require('../utils/auth');

// getting

// get all recipes for the USERS cookbook

router.get('/profile', async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      include: [User],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('all-posts', { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', withAuth, async (req, res) => {
  try {
    const recipeData = await Recipes.findAll({
      where: {

        // TODO: SET USERID userId TO THE REQUEST SESSION LOGGED-IN USER ID
      },
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('all-posts-admin', {
      layout: 'dashboard',
      posts,
    });
  } catch (err) {
    res.redirect('login');
  }
});

router.get('/new', withAuth, (req, res) => {
  res.render('new-post', {
    layout: 'dashboard',
  });
});

router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (postData) {
      const post = postData.get({ plain: true });

      res.render('edit-post', {
        layout: 'dashboard',
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;


// res.render(“homepage”, {
//   posts: posts,
//   loggedIn: req.session.loggedIn,
// });