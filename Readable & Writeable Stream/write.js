var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf-8');
var writeStream = fs.createWriteStream(__dirname + '/writeMe.txt');

readStream.on('data', function (data) {
    console.log('New data has received....\n');
    writeStream.write(data);
});