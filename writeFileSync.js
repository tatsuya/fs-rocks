var fs = require('fs');
var filename = '/tmp/hello.txt';
var data = 'Hello';

fs.writeFileSync(filename, data);