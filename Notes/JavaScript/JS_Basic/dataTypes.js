// Data Types

// 1. STRING
let university = "AIUB";
let letter = 'A';

console.log(typeof university); // string
console.log(typeof letter);     // string



// 2. NUMBER
let n1 = 1;
let n2 = 3.0998080989098;

console.log(typeof n1); // number
console.log(typeof n2); // number



// 3. BIGINT
let bigInt1 = BigInt(1234567890123456789012345);
let bigInt2 = 1234567890123456789012345n;

console.log(typeof bigInt1); // bigint
console.log(typeof bigInt2); // bigint



// 4. BOOLEAN
let testBool = true;

console.log(typeof testBool); // boolean



// 5. UNDEFINED : Declared but no value assigned
let testUndefined;

console.log(testUndefined);       // undefined
console.log(typeof testUndefined); // undefined

// You can also explicitly assign undefined
let u = undefined;

console.log(u);        // undefined
console.log(typeof u); // undefined



// 6. NULL : intentionally "no value"
let testNull = null;

console.log(testNull);        // null
console.log(typeof testNull); // object ⚠️



// 7. OBJECT : collection of key-value pairs
const person = {
    firstName: "John",
    lastName: "Doe"
};

console.log(typeof person); // object



// 8. ARRAY
const cars = ["Saab", "Volvo", "BMW"];

console.log(typeof cars); // object