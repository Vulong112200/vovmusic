const Router = require("express").Router();

const controller = require("../controllers/likedsong_controller");


Router.post("/", controller.addSong);

Router.get("/", controller.allSong);

Router.get("/:IDUser", controller.songInfo);

Router.post("/find", controller.findSong); // find by username and pass word

Router.post("/:IDUser", controller.updateInfo);

module.exports = Router;