// File and Directory Management
const fs = require('node:fs');
const path = require('path');

const pathFolder = path.join(__dirname, 'testDir');
const pathFile = path.join(pathFolder, 'testFile.txt');
const pathRenamedFile = path.join(pathFolder, 'renamedFile.txt');
const text = "Create directory and add new file"

const handleResult = (err, successMessage) => {
    if (err) console.error(err);
    else console.log(successMessage);
}

fs.mkdir(pathFolder, { recursive: true }, (err) => handleResult(err, 'Directory created successfully!'));

fs.writeFile(pathFile, text, (err) => handleResult(err, 'File created successfully!'));

fs.rename(pathFile, pathRenamedFile, (err) => handleResult(err, 'File renamed'));

fs.unlink(pathRenamedFile, (err) => handleResult(err, 'File deleted'));

fs.rmdir(pathFolder, (err) => handleResult(err, 'Directory deleted'))