#!/usr/bin/env node

var fs = require('fs');
var join = require('path').join;
var tmpPath = '/tmp';

fs.readdir(tmpPath, function(err, files) {
  if (err) throw err;
  for (var i = 0; i < files.length; i++) {
    console.log(join(tmpPath, files[i]));
  }
});