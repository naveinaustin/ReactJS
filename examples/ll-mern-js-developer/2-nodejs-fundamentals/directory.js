const fs = require('fs');

if(fs.existsSync("storage-files")) {
    console.log("already exists")
} else {
    fs.mkdir("storage-files", err => {
        if(err) {
            throw err;
        }
        console.log("directory created");
    });
}

fs.renameSync('./storage-files', './storage');
fs.readdirSync('./storage').forEach(fileName => {
    fs.unlinkSync(`./storage/${fileName}`);

    fs.rmdir('./storage', err => {
        if(err) {
            throw err;
        }
    
        console.log('./storage directory removed');
    });
});
