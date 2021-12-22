const router = require('express').Router();
const { Recipe, UserRecipe } = require('../../models');
const withAuth = require('../../utils/auth');
var nodemailer = require('nodemailer');
var chalk = require('chalk');

//  Create transport connection to email recipe links to email addresses
var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'foodfordays.email@gmail.com',
		pass: 'BootCamp1sFun'
	}
});

//  takes "sourceURL" (a recipe) and emails to "email"
function sendRecipe(email, sourceUrl) {
	// Set up default
	var mailOptions = {
		from: 'foodfordays.email@gmail.com',
		to: 'lindalw03@gmail.com',
		subject: 'Recipe from Food-For-Days',
		text: 'Here is your recipe link: '
	};

	mailOptions.to = email;
	mailOptions.text = mailOptions.text + sourceUrl;

	transporter.sendMail(mailOptions, function(error, info) {
		if (error) {
			console.log(chalk.blue(error));
		} else {
			console.log(chalk.blue('Email sent: ' + info.response));
		}
	});
}

// user will input email to then send 'sourceUrl' to that email
// Endpoint: /api/recipe/email 

router.post('/email', withAuth, async (req, res) => {
      console.log("in router.post");
      try {
        // Send recipe link to logged in users email 
        sendRecipe(req.session.email, req.body.sourceUrl);
        res.status(200).json({message: `Email sent to ${req.session.email}`});
      } catch (err) {
        console.error(err);
        res.status(500).json(err);
      }
    });
    
// Endpoint: /api/recipe/<cuisine>
router.get('/:cuisine', async (req, res) => {
    try {
      const recipeData = await Recipe.findAll({
        where: {
          cuisine: req.params.cuisine
        }
      });
      res.status(200).json(recipeData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


//this is adding a recipe to a user which we do through UserRecipe
//endpoint: /api/recipe
router.post('/', withAuth, async (req, res) => {
  try {
    const newUserRecipe = await UserRecipe.create({
	userId: req.session.userId,
	recipeId: req.body.recipeId
  })
  res.status(200).json(newUserRecipe);
} catch (err) {
  res.status(400).json(err);
}
});

module.exports = router;

