const fs = require('fs');

//const text = fs.readFileSync("./assets/Readme.md", "UTF-8");
//console.log(text);

fs.readFile("./assets/Readme.md", "UTF-8", (err, text) => {
    if(err) {
        console.log(`an error occured: ${err.message}`);
    }
    console.log("file contents read");
    console.log(text);
});
fs.readFile("./assets/alex5.jpg", "UTF-8", (err, img) => {
    if(err) {
        console.log(`an error occured: ${err.message}`);
    }
    console.log("file contents read");
    console.log(img);
});

