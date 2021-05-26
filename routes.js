const Express = require("express");
const Router = Express.Router();
const UserController = require(`./controllers/users`);

Router.get("/", UserController.index);
Router.post("/result", UserController.result);

module.exports = Router;