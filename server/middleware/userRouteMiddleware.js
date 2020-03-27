const mongoose = require("mongoose");
const { mongo } = require("../../config");
mongoose.connect(mongo.conectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const userSchema = require("../schemas/user")();
const User = mongoose.model("User", userSchema);

const tryCatchResError = async (req, res, next, func) => {
  try {
    await func(req, res);
  } catch (error) {
    next(error);
  }
};

const applyRouteMiddleware = app => {
  app.get("/user/:id", async (req, res, next) => {});
  app.get("/users");
};

module.exports = { applyRouteMiddleware };
