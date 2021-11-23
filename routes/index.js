const userRoute = require("./userRoute");
const likedsongRoute = require("./likesongRoute");

function route(app) {

    app.use("/user", userRoute);



}

module.exports = route;