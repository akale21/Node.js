

const fs = require('fs');//asynhronous version

const data = "This is the new content of the file.";

fs.writeFile('writeme.txt', data, (err) => {
    if(err) {
        throw err;
    }
    console.log("Data has been written to file successfully.");
});
