const path = require('path');
const express = require('express');
const routes = require('./controllers');
const session = require('express-session');

// Setup express app
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/config');
// Session store using sequelize to store session data
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Set up session middleware
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  // store: new SequelizeStore({
  //   db: sequelize
  // })
};
app.use(session(sess));

// Setup request data parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Set static content to the public foler
app.use(express.static(path.join(__dirname, 'public')));

// Setup routing middleware
app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });
});
