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

<<<<<<< HEAD

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
=======
>>>>>>> 8afc46cb048ca1f14e40e807101d2162d2fd6db6
module.exports = router;