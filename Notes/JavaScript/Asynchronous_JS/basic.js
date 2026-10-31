// Synchronous Javascript
console.log("A");
console.log("B");
console.log("C");



// Asynchronous Javascript
console.log("A");
setTimeout(() => {
    console.log("B");
}, 5000)
console.log("C");