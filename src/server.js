var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');


var promise = require('bluebird');
var options = {
    promiseLib: promise
};
var pgp = require("pg-promise")(options);
var connectionString = "postgres://localhost:5432/joyce_db";
var db = pgp(connectionString);
var bcrypt = require("bcryptjs");

var app = express();

// allow CORS access
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Content-Type", "application/json");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// create postgres table if not exists
db.none("CREATE TABLE IF NOT EXISTS users (id SERIAL, email TEXT, hash TEXT)").then(function() {
    console.log('created USERS');
});

// USERS TABLE ===============================================

// POST to ADD new user to users table
app.post('/register', function(req, res, next) {

    var email = req.body.email;

    var hash = bcrypt.hash(req.body.password, 8, function(err, hash) {

        var insertion = 'INSERT INTO users (email, hash) VALUES ($1, $2) RETURNING id, email, hash';

        db.one(insertion, [email, hash])
            .then(function (id) {
                res.json(id);
            })
            .catch(function (err) {
                return next(err);
            });
    });
});

// POST to verify user in users table
app.post('/login', function(req, res, next) {

    var email = req.body.email;

    var user_query = 'SELECT hash FROM users WHERE email = $1';

    db.oneOrNone(user_query, [email])
        .then(function (user) {
            if (user != null && (bcrypt.compareSync(req.body.password, user.hash))) {
                res.json(user);
            } else {
                res.status(422);
                res.send('None shall pass');
            }
        })
        .catch(function (err) {
            return next(err);
        });
});


app.listen(4000, function () {
    console.log('Example app listening on port 4000!');
});


