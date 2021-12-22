const router = require('express').Router();
const { UserRecipe, Recipe } = require('../../models');
const withAuth = require('../../utils/auth');

// get all recipes for the USERS cookbook
// Endpoint: /api/cookbook
router.get('/', withAuth, async (req, res) => {
  try {
    const recipeData = await UserRecipe.findAll({
      where: { 
        userId: req.session.userId,
      },
      include: [{ model: Recipe }]
    });
    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;