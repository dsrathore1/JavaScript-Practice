"use strict"

// let fs = require("fs");
let fs = require("fs/promises");

// fs.readFile("file.txt", "utf-8", (err, data) => {
//     console.log(err, data);
// });

fs.writeFile("file.txt", "This is a text file for Testing");

let b = fs.readFile("file.txt", "utf-8");

b.then((data) => {
    console.log(data);
});

console.log("This is my eof");


const readThreeFile = async (file1, file2, file3) => {
    let a1 = await fs.readFile(file1, "utf-8");
    let a2 = await fs.readFile(file2, "utf-8");
    let a3 = await fs.readFile(file3, "utf-8");
    console.log(a2);
    console.log(a1);
    console.log(a3);
}

readThreeFile("file1.txt", "file2.txt", "file3.txt");