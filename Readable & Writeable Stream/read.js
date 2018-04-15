var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf-8');

readStream.on('data', function (data) {
    console.log('A Chunck Of Data Received.\n\n');
    console.log(data);
});