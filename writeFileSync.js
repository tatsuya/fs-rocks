#!/usr/bin/env node

var fs = require('fs');
var join = require('path').join;
var filename = '/tmp/hello.txt';
var data = 'Hello';

fs.writeFileSync(filename, data);