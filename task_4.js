// JSON File Handling
const fs = require('node:fs');

const data = {
    name: "John",
    age: 30,
};

const jsonData = JSON.stringify(data, null, 2);

fs.writeFile('./data.json', jsonData, err => {
    if (err) {
        console.error(err);
    } else console.log('File written successfully');
});



fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else console.log(JSON.parse(data));
});
