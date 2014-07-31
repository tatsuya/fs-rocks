#!/usr/bin/env node

var fs = require('fs');
var join = require('path').join;
var dir = join(__dirname, '../');
var isjs = /^.*\.js/;
var readme = join(__dirname, '../README.md');

var header = '# fs-rocks\n\n## rocks\n\n';
var footer = '## contribution\n\nAdd a `.js` file and then run `make readme` to update this README.md.\n';

var fileContent = header;

var files = fs.readdirSync(dir);

for (var i = 0; i < files.length; i++) {
  if (files[i].match(isjs)) {
    var filename = files[i];
    var data = fs.readFileSync(join(dir, filename), 'utf-8');
    fileContent += filename + '\n\n';
    fileContent += '```js\n';
    fileContent += data + '\n';
    fileContent += '```\n\n';
  }
}

fileContent += footer;

fs.writeFileSync(readme, fileContent);