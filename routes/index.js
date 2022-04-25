const express = require("express");
const router = express.Router();

const notificationRoute = require("./notification");

const defaultRoute = [
  {
    path: "/notification",
    routes: notificationRoute,
  },
];

defaultRoute.forEach((route) => {
  router.use(route.path, route.routes);
});

module.exports = router;
