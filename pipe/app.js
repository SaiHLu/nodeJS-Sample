var http = require('http');
var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf-8');
var writeStream = fs.createWriteStream(__dirname + '/writeMe.txt');

readStream.on('data', function(data) {
    console.log('A new chunk of data has been received.');
    readStream.pipe(writeStream);
});

/*

var server = http.createServer(function(req, res) {
    console.log('You request => ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var readStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf-8');
    readStream.pipe(res);
});

server.listen(3000, 'localhost');
console.log('Server running on port 3000');
*/