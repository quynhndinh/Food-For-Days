const router = require('express').Router();
const { Recipes } = require('../../models/');
const withAuth = require('../../utils/auth');

// given a cuisine, return all recipes with that cuisine
// parameter needed is cuisine

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


// user will input email to then send 'source_url' to that email

router.post('/', withAuth, async (req, res) => {
  const body = req.body;
  try {
    const newPost = await Post.create({
      // TODO: POST BODY SENT IN REQUEST. HINT USING SPREAD 

      // TODO: SET USERID userId TO LOGGEDIN USERID

    });
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});













router.put('/:id', withAuth, async (req, res) => {
  try {
    const [affectedRows] = await Post.update(req.body, {
      // TODO: SET ID TO ID PARAMETER INSIDE WHERE CLAUSE CONDITION FIELD

    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const [affectedRows] = Post.destroy({
      // TODO: SET ID TO ID PARAMETER INSIDE WHERE CLAUSE CONDITION FIELD

    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
