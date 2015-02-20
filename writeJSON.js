var fs = require('fs');
var filename = '/tmp/hello.json';
var data = {
  hello: 'world'
};
var space = 2;

var str = '';
try {
  str = JSON.stringify(data, null, space);
} catch (err) {
  throw err;
}

fs.writeFile(filename, str, function(err) {
  if (err) {
    throw err;
  }
  console.log('The file was saved!');
});