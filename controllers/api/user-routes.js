const router = require('express').Router();
const { User } = require('../../models');

// posting

// creating a new user account - sign up
// Endpoint: /api/user
// params: email and password
router.post('/', async (req, res) => {
  try {
    console.log(req.body)
    const newUser = await User.create(req.body);

    req.session.save(() => {
      // TODO: SET USERID userId IN REQUEST SESSION TO ID RETURNED FROM DATABASE

      // TODO: SET USERNAME username IN REQUEST SESSION TO USERNAME RETURNED FROM DATABASE

      // TODO: SET LOGGEDIN loggedIn TO TRUE IN REQUEST SESSION

      res.json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// Endpoint: /api/user/login
// router.post('/login', async (req, res) => {
//   try {
//     const user = await User.findOne({
//       where: {
//         email: req.body.email,
//       },
//     });

//     if (!user) {
//       res.status(400).json({ message: 'No user account found!' });
//       return;
//     }

//     const validPassword = user.checkPassword(req.body.password);

//     if (!validPassword) {
//       res.status(400).json({ message: 'No user account found!' });
//       return;
//     }

    //knows that user is logged in 
    // req.session.save(() => {
      // TODO: SET USERID userId IN REQUEST SESSION TO ID RETURNED FROM DATABASE

      // TODO: SET USERNAME username IN REQUEST SESSION TO USERNAME RETURNED FROM DATABASE

      // TODO: SET LOGGEDIN loggedIn TO TRUE IN REQUEST SESSION

//       res.json({ user, message: 'You are now logged in!' });
//     });
//   } catch (err) {
//     res.status(400).json({ message: 'No user account found!' });
//   }
// });

//URL api/user/logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
