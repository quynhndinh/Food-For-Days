const router = require('express').Router();
const { Recipe } = require('../../models');
const withAuth = require('../../utils/auth');
var nodemailer = require ('nodemailer');// TODO: TAKE THIS
var chalk = require('chalk'); // TODO Take this

// TODO Take transporter
var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: 'bootcamp202112@gmail.com',
        pass: 'BootCamp1sFun'
    }
});


// TODO Take this
function sendRecipe(email, source_url){
  var mailOptions = {
    from: 'bootcamp202112@gmail.com',
    to:'lindalw03@gmail.com',
    subject: 'Recipe from Food-For-Days',
    text: 'Here is your recipe link: '
  };
console.log(chalk.blue("in Send Recipe email, source_url " + email + source_url))
    mailOptions.to = email;
    mailOptions.text = mailOptions.text + source_url;

    console.log (chalk.blue("sendRecipe mailOptions: ", {mailOptions}));

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
          console.log(chalk.blue(error));
  
      }else {
          console.log(chalk.blue('Email sent: ' + info.response));
      }
  });
  
}

// posting


// user will input email to then send 'source_url' to that email
// TODO: Take this
// Endpoint: /api/recipes/email  //TODO change this to api/recipe/email
// Params:  email       email address where you want to send
//          source_url  url of recipe you want to send

router.post('/email', withAuth, async (req, res) => {
  const body = req.body;
  try {

    // TODO: Retrieve user email and recipe link from body
    // ?? Not sure if we need to do this within the try and what would be 
    // in the await
    let email = 'lindalw03@gmail.com'; // TODO Replace this with email from body
    let source_url = "https://www.allrecipes.com/recipe/235799/chef-johns-dark-chocolate-mousse/"; // TODO Replace with source_url from body
    
    // Send recipe link to given email
    sendRecipe(email, source_url);
        
    // const newPost = await Post.create({


    //   // TODO: POST BODY SENT IN REQUEST. HINT USING SPREAD 

    //   // TODO: SET USERID userId TO LOGGEDIN USERID 

    // });

    // res.json(newPost);
    res.send("Recipe " + source_url, " sent to " + email);
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
