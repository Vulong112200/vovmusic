const userRoute = require("./userRoute");
const liked_songRoute = require("./liked_songRoute");

function route(app) {

    app.use("/user", userRoute);
    app.use("/liked-songs", liked_songRoute);
}

module.exports = route;