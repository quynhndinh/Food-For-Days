const router = require('express').Router();
const { UserRecipe, Recipe, User } = require('../models');
const withAuth = require('../utils/auth');

// getting

// get all recipes for the USERS cookbook
// Endpoint: /cookbook
// include: [User], or where: req.session.user_id

// router.get('/', withAuth, async (req, res) => {
//     try {
//       console.log("**********", req.session.userId)
//       const cookbookData = await UserRecipe.findAll({
//         include: [{ model: User, model: Recipe}]
//       });
//       console.log(recipeData);
//       res.status(200).json(cookbookData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });





// router.get('/', withAuth, async (req, res) => {
//   try {
//     console.log("**********", req.session.userId)
//     const cookbookData = await UserRecipe.findAll({
//       where: {
//         userId: req.session.userId,
//       }
//     });
//     console.log(recipeData);
//     res.status(200).json(cookbookData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;