const express = require("express");

const { applyRouteMiddleware } = require("./middleware/userRouteMiddleware");

const server = () => {
  const app = express();

  applyRouteMiddleware(app);

  return app;
};

module.exports = server;
