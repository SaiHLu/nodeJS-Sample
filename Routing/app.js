var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    console.log('Request made: ' + req.url);
    var request = req.url;

    if (request === '/home' || request === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html', 'utf-8').pipe(res);
    } else if (request === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html', 'utf-8').pipe(res);
    } else if (request === '/api/shl') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        var shl = [
            {
                'name': 'first',
                'age': 20
            },
            {
                'name': 'second',
                'age': 22
            },
            {
                'name': 'third',
                'age': 33
            }
        ];

        res.end(JSON.stringify(shl));
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html', 'utf-8').pipe(res);
    }
});


server.listen(3000, 'localhost');
console.log('Server running on port 3000');