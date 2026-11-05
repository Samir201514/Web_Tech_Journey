// fs : File System
const fs = require("fs")

fs.writeFile("write.txt", "I am writting in this file.", (error) => {
    if(error){
        console.log(error)
        return;
    }
    console.log("Writing into file...")
})

// fs.writeFileSync("write.txt", "I am writting in this file.")

console.log("File Writting Complete.")