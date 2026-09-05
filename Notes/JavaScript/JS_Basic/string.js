let str = "Hello World";

console.log(str.length);

console.log(str.charAt(2));
console.log(str.indexOf("e"));

console.log(str.split(" "));

console.log(str.includes("el"));

console.log(str.slice(-4, -2)); // Support Negative
console.log(str.substring(2, 4)); // Dosen't Support Negative


console.log(str.replace("l", "^")); // First one
console.log(str.replaceAll("l", "^")); // all