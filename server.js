// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var tableJS = require('./app/data/table.js')

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Restaurant Seed (DATA)
// =============================================================

// var reservations = [{
//     routeName: 'christi',
//     customerName: 'Christi',
//     phoneNumber: '9195555555',
//     customerEmail: 'cs@ymail.com',
//     customerID: 100
// }, {
//     routeName:'ryan',
//     customerName: 'Ryan',
//     phoneNumber: '9195554444',
//     customerEmail: 'ro@unc.edu',
//     customerID: 101
// }, {
//     routeName: 'cherish',
//     customerName: 'Cherish',
//     phoneNumber: '9195553333',
//     customerEmail: "ck@unc.edu",
//     customerID: 102
// }];



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

app.post('/api/tables', function (req, res) {
	var newreservation = req.body;
	newreservation.routeName = newreservation.customerName.replace(/\s+/g, '').toLowerCase();

	console.log(newreservation);

	tableJS.reservations.push(newreservation);
    console.log(tableJS);

	res.json(newreservation);
});

app.post('/api/waitlist', function (req, res) {
    res.sendFile(path.join(__dirname, './app/data/waitlist.js'));
});

// Search for Specific Reservation (or all reservations) - provides JSON
app.get('/api/?', function (req, res) {
    var chosen = req.params.reservations;

    if (chosen) {
        console.log(chosen);

        for (var i = 0; i < reservations.length; i++) {
            if (chosen === reservations[i].routeName) {
                res.json(reservations[i]);
                return;
            }
        }

        res.json(false);
    } else {
        res.json(reservations);
    }
});

// Create New Reservation - takes in JSON input
app.post('/api/new', function (req, res) {
    console.log(res);
    console.log(req.body);
    var newreservation = req.body;
    newreservation.routeName = newreservation.customerName.replace(/\s+/g, '').toLowerCase();

    console.log(newreservation);

    reservations.push(newreservation);

    res.json(newreservation);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);

});
