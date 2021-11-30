const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const teamRoute = require('./team.route');
const playerRoute = require('./player.route');
const formationRoute = require('./formation.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/players',
    route: playerRoute,
  },
  {
    path: '/teams',
    route: teamRoute,
  },
  {
    path: '/formations',
    route: formationRoute,
  }
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
