
//get route to the /survey page ('/survey')

//a default 'catch all' route that directs to the home.html file ('/')


var path = require("path");

module.exports = function(app){
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/", function(req, res) {
        res.json(path.join(__dirname, "../public/home.html"));

    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
};