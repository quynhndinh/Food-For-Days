const router = require('express').Router();
const { UserRecipe, Recipe, User } = require('../../models');
const withAuth = require('../../utils/auth');

// getting

// get all recipes for the USERS cookbook
// Endpoint: /api/cookbook
// include: [User], or where: req.session.user_id
router.get('/', withAuth, async (req, res) => {
  console.log("**********","GET /cookbook", req.session.user_id)
  try {
    console.log("**********", req.session.user_id)
    const recipeData = await UserRecipe.findAll({
      where: { 
        userId: req.session.userId,
      },
      include: [{ model: Recipe }]
    });
    console.log(recipeData);
    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;