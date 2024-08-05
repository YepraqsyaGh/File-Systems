// JSON File Handling
const fs = require('node:fs');
const path = require('path');

const filePath = path.join(__dirname, 'data.json');

const data = {
    name: "John",
    age: 30,
};

const jsonData = JSON.stringify(data, null, 2);

fs.appendFile(filePath, jsonData, err => {
    if (err) {
        console.error(err);
    } else console.log('File written successfully');
});



fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else console.log(JSON.parse(data));
});
