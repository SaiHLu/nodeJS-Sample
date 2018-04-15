var http = require('http');

var server = http.createServer(function(req, res) {
    console.log('Request made : ' + req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});
    var JsonObj = {
        'name': 'sai Hlaing',
        'age': 19,
        'city': 'Shan State, Myanmar'
    };

    res.end(JSON.stringify(JsonObj));
});

server.listen(3000, 'localhost');
console.log('Server is running on port 3000');