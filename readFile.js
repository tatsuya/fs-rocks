var fs = require('fs');
var join = require('path').join;
var filename = join(__dirname, 'README.md');

fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});