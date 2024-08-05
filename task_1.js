//Basic File Operations

const fs = require('node:fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');

fs.writeFile(filePath, "Hello, World!", err => {
    if (err) {
      console.error(err);
    } 
  });

  fs.appendFile(filePath, " This is Node.js FS module.", err => {
    if (err) {
      console.error(err);
    }
  });


fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else console.log(data);
});
