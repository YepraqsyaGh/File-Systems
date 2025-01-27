// Synchronous vs. Asynchronous Operations
const fs = require('node:fs');
const path = require('path');

const filePath = path.join(__dirname, 'metods.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else console.log('File read successfully:', data);
});

fs.writeFile(filePath, "Last Text", err => {
    if (err) {
        console.error(err);
    } else console.log('File written successfully');;
});



try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log('File read successfully:', data);

    fs.writeFileSync(filePath, "Last Text");
    console.log('File written successfully');
} catch (err) {
    console.error('Error:', err);
}

//The order of operations and their completion times cause the difference in output:

/* Asynchronous methods 
    do not wait for each operation to complete before moving on, 
    leading to the write operation possibly completing before the read operation.
*/

/* Synchronous methods
    wait for each operation to complete before moving on, 
    leading to the read operation completing before the write operation.
*/ 

// In my example the output was the following
/* 
Asynchronous methods output
    File written successfully
    File read successfully: Last Text!

Synchronous methods
    File read successfully: First Text
    File written successfully
*/