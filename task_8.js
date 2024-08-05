// Permissions and Metadata
const fs = require('fs');
const path = require('path');

const pathFolder = './filesDir';

fs.stat('./metadata.txt', (err, stats) => {
    if (err) {
        console.error('Error getting file metadata:', err);
        return;
    }

    console.log('File Size:', stats.size, 'bytes');
    console.log('Created At:', stats.birthtime);
    console.log('Modified At:', stats.mtime);
    console.log('Is Directory:', stats.isDirectory());
    console.log('Is File:', stats.isFile());
});

fs.chmod('./metadata.txt', 0o444, (err) => {
    if (err) console.error(err);
    else console.log('File permissions changed to read-only');
});

fs.writeFile('./metadata.txt', 'Hello world', (err) => {
    if (err) console.error(err);
});