// OS : Operating System
const os = require("os"); // CommonJS Module
// import os from "os"; // ES Module

console.log(`Total RAM: ${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB`);
console.log(`Free RAM: ${(os.freemem() / (1024 ** 3)).toFixed(2)} GB`);
console.log(`Home Directory: ${os.homedir()}`);
console.log(`Host Name: ${os.hostname()}`);
console.log(`OS Platform: ${os.platform()}`);
console.log(`OS Type: ${os.type()}`);
console.log(`OS Release: ${os.release()}`);
console.log(`System Uptime: ${os.uptime()} seconds`);