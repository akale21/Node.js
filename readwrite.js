//var fs = require('fs');

// var readMe=fs.readFileSync('read.txt', 'utf8'); //utf8 is used to store file content in readMe and load to the console
// console.log(readMe);

// const fs = require('fs');//asynhronous version

// fs.readFile('readme.txt', (err, data) => {
//     if(err) {
//         throw err;
//     }
//     console.log(data.toString());
// });

// fs.readFile('readme.txt','utf8',function(err,data){
//     fs.writeFileSync('writeme.txt',data);
// });


const fs = require('fs');//asynhronous version

const data = "This is the new content of the file.";

fs.writeFile('writeme.txt', data, (err) => {
    if(err) {
        throw err;
    }
    console.log("Data has been written to file successfully.");
});
