#!/usr/bin/env node

var fs = require('fs');
var join = require('path').join;
var filename = join(__dirname, 'README.md');

var data = fs.readFileSync(filename, 'utf8');
console.log(data);