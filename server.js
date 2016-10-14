// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

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
//     name: 'Christi',
//     phone: '9195555555',
//     email: 'cs@ymail.com',
//     id: 100
// }, {
//     routeName: 'ryan',
//     name: 'Ryan',
//     phone: '9195554444',
//     email: 'ro@unc.edu',
//     id: 101
// }, {
//     routeName: 'cherish',
//     name: 'Cherish',
//     phone: '9195553333',
//     email: "ck@unc.edu",
//     id: 102
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

app.get('/api/tables', function (req, res) {
    res.sendFile(path.join(__dirname, './app/data/table.js'));
});

app.get('/api/waitlist', function (req, res) {
    res.sendFile(path.join(__dirname, './app/data/waitlist.js'));
});

// Search for Specific Reservation (or all reservations) - provides JSON
// app.get('/api/?', function (req, res) {
//     var chosen = req.params.reservations;

//     if (chosen) {
//         console.log(chosen);

//         for (var i = 0; i < reservations.length; i++) {
//             if (chosen === reservations[i].routeName) {
//                 res.json(reservations[i]);
//                 return;
//             }
//         }

//         res.json(false);
//     } else {
//         res.json(reservations);
//     }
// });

// // Create New Reservation - takes in JSON input
// app.post('/api/new', function (req, res) {
//     var newreservation = req.body;
//     newreservation.routeName = newreservation.name.replace(/\s+/g, '').toLowerCase();

//     console.log(newreservation);

//     reservations.push(newreservation);

//     res.json(newreservation);
// });


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);

});
