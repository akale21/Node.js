var fs = require('fs');

//fs.mkdirSync("reafme.txt");// it create the file
//fs.rmdirSync("reafme.txt");//it remove the file

//asynchoronus version
fs.mkdir('stuff',function(){
    fs.readFile('readMe.txt','utf8', function(err, data){
        fs.writeFile('./stuff/write.txt',data);
    });
});