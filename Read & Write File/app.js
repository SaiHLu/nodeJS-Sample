var fs = require('fs');

// var read = fs.readFileSync('readFile.txt', 'utf-8');
// var write = fs.writeFileSync('writeFile.txt', read);

//asynchronize method
fs.readFile('readFile.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    }

    fs.writeFile('writeFile.txt', data);
});