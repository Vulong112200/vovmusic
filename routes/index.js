const userRoute = require("./userRoute");


function route(app) {

    app.use("/user", userRoute);
    app.use("/likedsong", likedsongRoute);


}

module.exports = route;