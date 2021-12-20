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
      req.session.user_id = newUser.id;
  
      // TODO: SET EMAIL email IN REQUEST SESSION TO USERNAME RETURNED FROM DATABASE
      req.session.email = newUser.email;
      // TODO: SET LOGGEDIN loggedIn TO TRUE IN REQUEST SESSION
      req.session.logged_in = true;

      res.status(200).json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// Endpoint: /api/user/login
// params: email and password
router.post('/login', async (req, res) => {
  try {
    console.log(req.body)
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      res.status(400).json({ message: 'No user account found!' });
      return;
    }

    const validPassword = user.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'No user account found!' });
      return;
    }

    // knows that user is logged in 
    req.session.save(() => {
      // TODO: SET USERID userId IN REQUEST SESSION TO ID RETURNED FROM DATABASE
      req.session.user_id = user.id;
      // TODO: SET EMAIL email IN REQUEST SESSION TO USERNAME RETURNED FROM DATABASE
      req.session.email = user.email;
      // TODO: SET LOGGEDIN loggedIn TO TRUE IN REQUEST SESSION
      req.session.logged_in = true;

      res.json({ user, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json({ message: 'No user account found!' });
  }
});

//URL api/user/logout
router.post('/logout', (req, res) => {
  console.log(req.session);
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(500).end();
  }
});

module.exports = router;
