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

// Basic route that sends the user first to the AJAX Page
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './app/public/landing.html'));
});

app.get('/reserve', function (req, res) {
    res.sendFile(path.join(__dirname, './app/public/res.html'));
});

app.get('/tables', function (req, res) {
    res.sendFile(path.join(__dirname, './app/public/tables.html'));
});

app.get('/api/tables', function (req,res) {
    console.log(req.params);
    console.log('in server -.get/api/reservations, reservations', reservations);
    res.json(reservations);
});

app.get('/api/waitlist', function(req,res) {
    console.log(req.params);
    console.log('in server -.get/api/waitlist, waitlist', waitlist);
    res.json(waitlist);
});

// *** Just updates an array? and sends back the json form of the new reservation??
app.post('/api/tables', function (req, res) {
	var newreservation = req.body;
	newreservation.routeName = newreservation.customerName.replace(/\s+/g, '').toLowerCase();

	console.log('\n in server.js, app.post("/api/tables")newreservation',newreservation);

    reservations.push(newreservation);

    console.log('in server.js - reservations',reservations);
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
