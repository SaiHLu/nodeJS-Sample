var fs = require('fs');

fs.mkdir('testFolder', function(err) {
    // fs.rmdir('testFolder');
    fs.readFile('readFile.txt', 'utf-8', function (err, data) {
        fs.writeFile('./testFolder/writeFile.txt', data);
    });
});