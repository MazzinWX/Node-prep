var http = require('http');

// create a server that listen to port 3000
var server = http.createServer(function(req,res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey ninjas');
});

// localhost server
server.listen(3000, '127.0.0.1');
console.log('Yo! Now listening to port 3000');