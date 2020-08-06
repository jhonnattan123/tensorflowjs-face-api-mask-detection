var express = require('express');
var app = express();
var path = require('path');

app.use("/", express.static(path.join(__dirname + '/detect-js/')));
app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname + '/detect-js/index.html'));
})
app.listen(3000);
module.exports = app;