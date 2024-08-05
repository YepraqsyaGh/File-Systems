// Error Handling
const fs = require('fs');

fs.readFile('./onExistentFile.txt', 'utf8', (err, data) => {
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
