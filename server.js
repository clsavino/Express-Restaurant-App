// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var reservations = require('./app/data/table.js');
var waitlist = require('./app/data/waitlist.js');
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Routes
// =============================================================

// Basic route that sends the userto the landing page
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './app/public/landing.html'));
});
//route to display the reservation page - res.html)
app.get('/reserve', function (req, res) {
    res.sendFile(path.join(__dirname, './app/public/res.html'));
});
// route to display the tables.html file
app.get('/tables', function (req, res) {
    res.sendFile(path.join(__dirname, './app/public/tables.html'));
});
//api path to get the current reservations, responds with a json object (an array of reservations)
app.get('/api/tables', function (req,res) {
    res.json(reservations);
});
// api path to get the current waitlist json object
app.get('/api/waitlist', function(req,res) {
    res.json(waitlist);
});

// *** Just updates an array of reservations and sends back the json form of the new reservation
app.post('/api/tables', function (req, res) {
	var newreservation = req.body;
	newreservation.routeName = newreservation.customerName.replace(/\s+/g, '').toLowerCase();
    reservations.push(newreservation);
	res.json(newreservation);
});

app.post('/api/waitlist', function (req, res) {
    res.sendFile(path.join(__dirname, './app/data/waitlist.js'));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);

});
