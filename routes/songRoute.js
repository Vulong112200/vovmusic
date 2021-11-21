const Router = require("express").Router();

const controller = require("../controllers/song_controller");


Router.post("/", controller.addSong);

Router.get("/", controller.allUser);

Router.get("/:IDUser", controller.songInfo);

Router.post("/find", controller.findSong); // find by username and pass word

Router.post("/:IDUser", controller.updateInfo);

module.exports = Router;