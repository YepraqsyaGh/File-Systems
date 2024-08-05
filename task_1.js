//Basic File Operations

const fs = require('node:fs');

fs.writeFile('./example.txt', "Hello, World!", err => {
    if (err) {
      console.error(err);
    } 
  });

  fs.appendFile('./example.txt', " This is Node.js FS module.", err => {
    if (err) {
      console.error(err);
    }
  });


fs.readFile('./example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else console.log(data);
});
