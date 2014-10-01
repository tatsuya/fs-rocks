var fs = require('fs');
var join = require('path').join;
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

fs.writeFileSync(filename, str);
