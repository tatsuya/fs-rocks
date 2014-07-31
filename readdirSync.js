#!/usr/bin/env node

var fs = require('fs');
var join = require('path').join;
var tmpPath = '/tmp';

var files = fs.readdirSync(tmpPath);
for (var i = 0; i < files.length; i++) {
  console.log(join(tmpPath, files[i]));
}