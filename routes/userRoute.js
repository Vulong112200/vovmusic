const Router = require("express").Router();

const controller = require("../controllers/user_controller");


Router.post("/", controller.addUser);

Router.get("/", controller.allUser);

Router.get("/:IDUser", controller.userInfo);

Router.post("/find", controller.findUser);

Router.post("/:IDUser", controller.updateInfo);

Router.post("/doipass/:IDUser", controller.updatePass);

module.exports = Router;