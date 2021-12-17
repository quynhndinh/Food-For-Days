const router = require('express').Router();
const { User } = require('../../models');


// called when a user signs up for website
// email and password

// posting

// URL: /api/user
router.post('/', async (req, res) => {
  try {
    const newUser = await User.create({
      // TODO: SET EMAIL TO EMAIL SENT IN REQUEST
      // ??

      // TODO: SET PASSWORD TO PASSWORD SENT IN REQUEST
      // password: req.session.password
      // ???
    });

    req.session.save(() => {
      // TODO: SET USERID userId IN REQUEST SESSION TO ID RETURNED FROM DATABASE
      req.session.user_id = newUser.id;
      // TODO: SET EMAIL email IN REQUEST SESSION TO EMAIL RETURNED FROM DATABASE
      req.session.email = newUser.id;

      // TODO: SET LOGGEDIN loggedIn TO TRUE IN REQUEST SESSION
      req.session.logged_in = true;
      

      // only saving userID, email
      // not saving password?

      res.json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// URL: /api/user/login
router.post('/login', async (req, res) => {
  try {
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

    req.session.save(() => {
      // TODO: SET USERID userId IN REQUEST SESSION TO ID RETURNED FROM DATABASE

      // TODO: SET USERNAME username IN REQUEST SESSION TO USERNAME RETURNED FROM DATABASE

      // TODO: SET LOGGEDIN loggedIn TO TRUE IN REQUEST SESSION

      res.json({ user, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json({ message: 'No user account found!' });
  }
});

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
