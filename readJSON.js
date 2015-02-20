var fs = require('fs');
var join = require('path').join;
var filename = join(__dirname, 'package.json');

fs.readFile(filename, 'utf8', function(err, data) {
  if (err) {
    throw err;
  }
  console.log(JSON.parse(data));
});