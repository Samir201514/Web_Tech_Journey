const path = require("path")

console.log("File Directory:", path.dirname(__filename))
console.log("File Name:", path.basename(__filename))
console.log("File Extension:", path.extname(__filename))

console.log(path.parse(__filename))