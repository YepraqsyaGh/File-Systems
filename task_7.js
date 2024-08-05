// Recursive Directory Operations
const fs = require('fs');
const path = require('path');

const pathFolder = './filesDir';

fs.readdir(pathFolder, (err, files) => {
    if (err)
        console.error(err);
    else {
        console.log("\nDirectory filenames:");
        files.forEach(file => {
            console.log(file);
        })
    }
})

fs.readdir(pathFolder, (err, files) => {
    if (err)
        console.log(err);
    else {
        const pathNewFolder = path.join(`./newFilesDir`);

        fs.mkdir(pathNewFolder, { recursive: true }, (err) => {
            if (err) console.log(err)
            else {
                files.forEach(file => {
                    const pathFile = path.join(pathFolder, file);
                    const pathNewFile = path.join(pathNewFolder, file);

                    fs.copyFile(pathFile, pathNewFile, (err) => {
                        if (err) console.error(err);

                    });
                })
            };
        });
    }
}) 
