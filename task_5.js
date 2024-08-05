// File Watching
const fs = require('node:fs');
const path = require('path');

const pathFolder = path.join(__dirname, 'watchDir');
const pathFile = path.join(pathFolder, 'testFile.txt');
const watcher = fs.watch(pathFolder);


const addFile = (message) => {
    console.log(message);
    fs.writeFile(pathFile, "Hello World!", (err) => {
        if (err) {
            console.error(err);
        }
    });
}

const readFile = (message) => {
    console.log(message);
    fs.readFile(pathFile, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else console.log(data);
    });
}

const modifyFile = (message) => {
    console.log(message);
    fs.appendFile(pathFile, "New Text", (err) => {
        if (err) {
            console.error(err);
        }
    });
}

const deleteFile = (message) => {
    console.log(message);
    fs.unlink(pathFile, (err) => {
        if (err) {
            console.error(err);
        }
    });
}

const stopWatching = () => {
    console.log('File watcher stopped', new Date().toISOString());
    watcher.close();
}

watcher.on('change', (eventType, filename) => {
    console.log('changed ->', new Date().toISOString(),
        `e: ${eventType}, f: ${filename}`);
});


addFile("add");
setTimeout(() => { readFile("read") }, 1000);
setTimeout(() => { modifyFile("modify") }, 2000);
setTimeout(() => { deleteFile("delete") }, 3000);
setTimeout(() => { stopWatching() }, 4000);

