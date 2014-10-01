var fs = require('fs');
var join = require('path').join;
var filename = '/tmp/hello.txt';
var data = 'Hello';

fs.writeFile(filename, data, function(err) {
  if (err) {
    throw err;
  }
  console.log("The file was saved!");
});