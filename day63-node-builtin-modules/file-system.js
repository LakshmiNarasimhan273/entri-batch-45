// library - fs (file system)
const fs = require("fs");

// 3 parameters
// 1 - filename
// 2 - file content
// 3 - callback function to understand the process
fs.writeFile("entri.txt", "Hello Learners welcome to Entri Session", (err) => {
    if(err){
        console.log("File Processing Failed");
        return;
    }
    console.log("File processed successfully");
});