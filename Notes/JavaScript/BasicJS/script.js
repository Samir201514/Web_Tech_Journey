// JavaScript is Case Sensitive
console.log("Hello World");

// Can be Redeclared
var a = 10;
var a = 20;


//let have Block Scope; cannot be Redeclared in the same scope
let x;
console.log(x);


/*cannot be Redeclared
Variables defined with const cannot be Reassigned
Variables defined with const have Block Scope

You can NOT:
Reassign a constant value
Reassign a constant array
Reassign a constant object

But you CAN:
Change the elements of constant array
Change the properties of constant object*/
const id = "23-55488-3"


/* Always use const if the value should not be changed
Always use const if the type should not be changed (Arrays and Objects)
Only use let if you cannot use const */

$name = null; //with let/const object; without/var string
console.log(typeof $name);

_name = "Samir";
console.log(typeof _name);

$name = 5; // String; with let/_, number
console.log(typeof $name);

/* JavaScript Values
The JavaScript syntax defines two types of values:

Literals (Fixed values)
Variables (Variable values)
 */


//8 DataTypes:
let university = "AIUB"; 
console.log(typeof university); //string

let cgpa = 3.62; 
console.log(typeof cgpa); //number

let bigInt1 = BigInt(1234567890123456789012345); 
let bigInt2 = 1234567890123456789012345n; 
console.log(typeof bigInt1); //bigint
console.log(typeof bigInt2); //bigint

let bool = true; 
console.log(typeof bool); //boolean

let u1;
console.log(typeof u1); //undefined

let u2 = undefined;
console.log(u2); //undefined

/*
let n = null;
console.log(typeof n); //object
// Object
const person = {firstName:"John", lastName:"Doe"};
// Array object
const cars = ["Saab", "Volvo", "BMW"];
// Date object
const date = new Date("2022-03-25");
// Symbol
const s = Symbol();
*/