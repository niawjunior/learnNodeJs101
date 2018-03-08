const fs = require('fs');
console.log("Started Reading--"+Date.now());
const data = fs.readFileSync('Readme.txt');
console.log("Finished Reading--"+Date.now());
console.log("Done!");