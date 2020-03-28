const express = require("express");
const mongoose = require("mongoose");
const { applyRouteMiddleware } = require("./middleware/userRouteMiddleware");
const { mongo } = require("../../config");

mongoose.connect(mongo.conectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const server = () => {
  const app = express();

  applyRouteMiddleware(app);

  return app;
};

module.exports = server;
