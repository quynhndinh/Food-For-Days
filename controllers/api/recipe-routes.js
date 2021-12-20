const router = require('express').Router();
const { Recipe } = require('../../models');
const withAuth = require('../../utils/auth');
var nodemailer = require('nodemailer');
var chalk = require('chalk');
// const res = require('express/lib/response'); this was in recipes.routes.js

//  Create transport connection to email recipe links to email addresses
var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'bootcamp202112@gmail.com',
		pass: 'BootCamp1sFun'
	}
});

//  takes "sourceURL" (a recipe) and emails to "email"
function sendRecipe(email, sourceUrl) {
	// Set up default
	var mailOptions = {
		from: 'bootcamp202112@gmail.com',
		to: 'lindalw03@gmail.com',
		subject: 'Recipe from Food-For-Days',
		text: 'Here is your recipe link: '
	};

	console.log(chalk.blue('in Send Recipe email, sourceUrl ' + email + sourceUrl));

	mailOptions.to = email;
	mailOptions.text = mailOptions.text + sourceUrl;

	console.log(chalk.blue('sendRecipe mailOptions: ', { mailOptions }));

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
// Params:  email       email address where you want to send
//          sourceUrl  url of recipe you want to send

router.post('/email', async (req, res) => {
      console.log("in router.post");
      const body = req.body;
      try {
    
        // TODO: Retrieve user email and recipe link from body
        // ?? Not sure if we need to do this within the try and what would be 
        // in the await
        // Send recipe link to given email
        sendRecipe(req.body.email, req.body.sourceUrl);
// TODO figure out what goes in the await and how to return errors properly.
        
        res.status(200).body("Recipe " + sourceUrl, " sent to " + email);
      } catch (err) {
        console.error(err);
        res.status(500).json(err);
      }
    });
    
    

//user_id , recipe_id
//this is adding a recipe to a user which we do through UserRecipe
//endpoint is /recipe
// router.post('/', withAuth, async (req, res) => {
//   const body = req.body;
//   try {
//     const newPost = await Post.create({
//     //const newUserRecipe = await UserRecipe.create({
//     //save user_id and recipe_id
//   })
// TODO: POST BODY SENT IN REQUEST. HINT USING SPREAD

// TODO: SET USERID userId TO LOGGEDIN USERID

//     });
//     res.json(newPost);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//email, recipe_id
//this is emailing a recipe to an email
//endpoint is /recipe/email
// router.post('/email', withAuth, async (req, res) => {
//   const body = req.body;
//   try {
//     const newPost = await Post.create({
//     //const newUserRecipe = await UserRecipe.create({
//     //save user_id and recipe_id
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
