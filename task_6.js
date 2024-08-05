// Error Handling
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'onExistentFile.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        if (err.code === 'ENOENT') {
            console.error('Error: The file does not exist.');
        } else {
            console.error('Error reading file:', err);
        }
    } else {
        console.log('File read successfully:', data);
    }
});
