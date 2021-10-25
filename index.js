const { json } = require('express');
const express = require('express');
const mongoose = require("mongoose");
const app = express();

const Router = require("./routes");

mongoose.connect('mongodb+srv://PhiVu:Admin1234@cluster0.tthxw.mongodb.net/vovmusic?retryWrites=true&w=majority', () => {
    console.log("Connect to db");
})

app.use(express.json());

Router(app);

let port = process.env.PORT || 3000;

app.listen(3000, function() {
    console.log("Listen at port 3000");
})