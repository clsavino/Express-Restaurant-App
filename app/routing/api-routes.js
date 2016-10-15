// ===============================================================================
// LOAD DATA
// Linking the routes to a series of "data" sources that hold arrays of information of table reservations and waitinglist
// ===============================================================================

var reservations = require('../data/table.js');
var waitList = require('../data/waitlist.js');

module.exports = function (app) {
//api path to get the current reservations, responds with a json object (an array of reservations)
app.get('/api/tables', function (req,res) {
    res.json(reservations);
});
// api path to get the current waitlist json object
app.get('/api/waitlist', function(req,res) {
    res.json(waitList);
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
};
