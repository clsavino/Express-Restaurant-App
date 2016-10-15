# Express-Restaurant-App

Basic app demonstrating setting up web servers with Node.js using Express. AJax and  jQuery used. Overall purpose is to help schedule reservation requests.


##### Screenshot 1
![Hot Restaurant Image](/images-readme/landing.PNG?raw=true)

##### Screenshot 2
![Hot Restaurant Image](/images-readme/reservationform.PNG?raw=true)

##### Screenshot 3
![Hot Restaurant Image](/images-readme/tables.PNG?raw=true)

##### Screenshot 4
![Hot Restaurant Image](/images-readme/apitables.PNG?raw=true)

##### Screenshot 5
![Hot Restaurant Image](/images-readme/apiwaitlist.PNG?raw=true)

##### Technologies Used
* **JavaScript**
* **jQuery**
* **AJAX**
* **Node.js**
* **Express**

##### The following npm modules were used
* **express**
* **body-parser**
* **path**

##### Getting Started
Clone or fork and run using server.js in the command line. Uses localhost:3000

##### Some code examples of api routes
```javascript
app.get('/api/tables', function (req,res) {
    res.json(reservations);
});
app.get('/api/waitlist', function(req,res) {
    res.json(waitList);
});
app.post('/api/tables', function (req, res) {
    var newreservation = req.body;
    newreservation.routeName = newreservation.customerName.replace(/\s+/g, '').toLowerCase();
    reservations.push(newreservation);
    res.json(newreservation);
});
app.post('/api/waitlist', function (req, res) {
    res.sendFile(path.join(__dirname, './app/data/waitlist.js'));
});
```

# Express-Restaurant-App
