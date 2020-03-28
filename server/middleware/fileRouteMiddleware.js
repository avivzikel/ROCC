const mongoose = require("mongoose");

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
  app.post("/file", async (req, res, next) => {});
  app.get("/file/:id", async (req, res, next) => {});
  app.put("/file/:id", async (req, res, next) => {});
  app.delete("/file/:id", async (req, res, next) => {});

};

module.exports = { applyRouteMiddleware };
