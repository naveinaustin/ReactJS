const fs = require('fs');

console.log("started reading files");
//const files = fs.readdirSync('./assets'); //calls reading of directory synchronisly
const files = fs.readdir('./assets', (err, files) => {
    if(err) {
        throw err;
    }
    console.log("complete");
    console.log(files);
});
//console.log("complete");
//console.log(files);
console.log("after");