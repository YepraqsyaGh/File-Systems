// JSON File Handling
const fs = require('node:fs');
const path = require('path');

const filePath = path.join(__dirname, 'data.json');

const initialData = [{
    name: "John",
    age: 30,
}];


const updateJsonFile = (value, jsonData) => {
    const newJsonData = value ? [...jsonData, value] : jsonData;
    fs.writeFile(filePath, JSON.stringify(newJsonData), err => {
        if (err) {
            console.error(err);
        } else console.log('File written successfully');
    });
}

const addNewData = (newData) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            if(err.code === 'ENOENT'){
                updateJsonFile(newData, initialData);
            } else console.error(err);
        } else {
            console.log(data);
            const jsonData = JSON.parse(data);
            updateJsonFile(newData, jsonData);
        };
    });
}

addNewData({
    name: "Stef",
    age: 18,
})
