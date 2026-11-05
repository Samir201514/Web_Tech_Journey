// fs : File System
const fs = require("fs")

// fs.readFile("read.txt", "utf8", (error, data) => {
//     console.log(error, data)
// })

const read = fs.readFileSync("read.txt")
console.log(read.toString())

console.log("File Reading Complete.")