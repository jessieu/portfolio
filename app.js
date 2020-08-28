var createError = require('http-errors');
var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('index.html')
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});
module.exports = app;
