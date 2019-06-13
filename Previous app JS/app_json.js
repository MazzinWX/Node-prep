var http = require('http');
var fs = require('fs');

// send data as a JSON string
var server = http.createServer(function (req, res) {
    console.log('request was made: ' + req.url);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var myObj = {
        name: 'Ryu',
        job: 'ninja',
        age: 27
    };
    res.end(JSON.stringify(myObj))
});

// localhost server
server.listen(3000, '127.0.0.1');
console.log('Yo! Now listening to port 3000');
