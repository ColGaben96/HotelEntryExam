var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function (req, res) {

    res.send("It Works!");

});

app.use(router);

app.listen(3000, function () {
    console.log("Node Server Running on localhost:3000");
});