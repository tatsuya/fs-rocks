# fs-rocks

## rocks

readFile.js

```js
var fs = require('fs');
var join = require('path').join;
var filename = join(__dirname, 'README.md');

fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});
```

readFileSync.js

```js
var fs = require('fs');
var join = require('path').join;
var filename = join(__dirname, 'README.md');

var data = fs.readFileSync(filename, 'utf8');
console.log(data);
```

readJSON.js

```js
var fs = require('fs');
var join = require('path').join;
var filename = join(__dirname, 'package.json');

fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  console.log(JSON.parse(data));
});
```

readJSONSync.js

```js
var fs = require('fs');
var join = require('path').join;
var filename = join(__dirname, 'package.json');

var data = fs.readFileSync(filename, 'utf8');
console.log(JSON.parse(data));
```

readdir.js

```js
var fs = require('fs');
var join = require('path').join;
var tmpPath = '/tmp';

fs.readdir(tmpPath, function(err, files) {
  if (err) throw err;
  for (var i = 0; i < files.length; i++) {
    console.log(join(tmpPath, files[i]));
  }
});
```

readdirSync.js

```js
var fs = require('fs');
var join = require('path').join;
var tmpPath = '/tmp';

var files = fs.readdirSync(tmpPath);
for (var i = 0; i < files.length; i++) {
  console.log(join(tmpPath, files[i]));
}
```

writeFile.js

```js
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
```

writeFileSync.js

```js
var fs = require('fs');
var join = require('path').join;
var filename = '/tmp/hello.txt';
var data = 'Hello';

fs.writeFileSync(filename, data);
```

writeJSON.js

```js
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

fs.writeFile(filename, str, function(err) {
  if (err) {
    throw err;
  }
  console.log("The file was saved!");
});
```

writeJSONSync.js

```js
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

```

## contribution

Add a `.js` file and then run `make readme` to update this README.md.
