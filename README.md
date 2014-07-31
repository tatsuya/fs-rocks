# fs-rocks

## rocks

readFile.js

```js
#!/usr/bin/env node

var fs = require('fs');
var join = require('path').join;
var filename = join(__dirname, 'README.md');

fs.readFile(filename, 'utf-8', function(err, data) {
  if (err) throw err;
  console.log(data);
});
```

readFileSync.js

```js
#!/usr/bin/env node

var fs = require('fs');
var join = require('path').join;
var filename = join(__dirname, 'README.md');

var data = fs.readFileSync(filename, 'utf-8');
console.log(data);
```

readdir.js

```js
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
```

readdirSync.js

```js
#!/usr/bin/env node

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
#!/usr/bin/env node

var fs = require('fs');
var join = require('path').join;
var filename = '/tmp/hello.txt';
var data = 'Hello';

fs.writeFile(filename, data, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("The file was saved!");
  }
});
```

writeFileSync.js

```js
#!/usr/bin/env node

var fs = require('fs');
var join = require('path').join;
var filename = '/tmp/hello.txt';
var data = 'Hello';

fs.writeFileSync(filename, data);
```

## contribution

Add a `.js` file and then run `make readme` to update this README.md.
