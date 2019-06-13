var fs = require('fs');

// reading stream
var myReadStream = fs.createReadStream(__dirname + '/lorem.txt', 'utf8');
// writing stream
var myWriteStream = fs.createWriteStream(__dirname + 'writeme.txt');

myReadStream.on('data', function (chunk) {
    console.log('new chunk received');
    myWriteStream.write(chunk);
});
