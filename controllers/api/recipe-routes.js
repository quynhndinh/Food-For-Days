const router = require('express').Router();
const { Recipe } = require('../../models');
const withAuth = require('../../utils/auth');

// posting


//userId , recipeId
//this is adding a recipe to a user which we do through UserRecipe
//endpoint is /recipe
router.post('/', withAuth, async (req, res) => {
  const body = req.body;
  try {
    const newPost = await Post.create({
    //const newUserRecipe = await UserRecipe.create({
    //save userId and recipeId
  })
      // TODO: POST BODY SENT IN REQUEST. HINT USING SPREAD 

      // TODO: SET USERID userId TO LOGGEDIN USERID

    });
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});


//email, recipeId
//this is emailing a recipe to an email
//endpoint is /recipe/email
// router.post('/email', withAuth, async (req, res) => {
//   const body = req.body;
//   try {
//     const newPost = await Post.create({
//     //const newUserRecipe = await UserRecipe.create({
//     //save userId and recipeId
//   })
//       // TODO: POST BODY SENT IN REQUEST. HINT USING SPREAD 

//       // TODO: SET USERID userId TO LOGGEDIN USERID

//     });
//     res.json(newPost);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;