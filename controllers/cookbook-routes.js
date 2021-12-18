const router = require('express').Router();
const { UserRecipe, User } = require('../models');
const withAuth = require('../utils/auth');

// getting

// get all recipes for the USERS cookbook
// Endpoint: /cookbook
// include: [User], or where: req.session.user_id
router.get('/', withAuth, async (req, res) => {
  // router.get('/', async (req, res) => {
  try {
    console.log("**********", req.session.user_id)
    const recipeData = await UserRecipe.findAll({
      // where: {
      //   user_id = req.session.user_id,
      // }
    });
    console.log(recipeData);
    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;