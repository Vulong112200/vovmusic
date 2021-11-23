const Router = require("express").Router();

const controller = require("../controllers/likedsong_controller");


Router.post("/", controller.addlikedSong);

Router.get("/", controller.alllikedSong);

module.exports = Router;