// JavaScript is Case Sensitive
console.log("Hello World");

// Can be Redeclared
var a = 10;
var a = 20;
console.log(a);


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
const id = "23-55488-3";


/* Always use const if the value should not be changed
Always use const if the type should not be changed (Arrays and Objects)
Only use let if you cannot use const */
/*
$name = null; //with let/const object; without/var string
console.log(typeof $name);

_name = "Samir";
console.log(typeof _name);

$name = 5; // String; with let/_, number
console.log(typeof $name);
*/


/* JavaScript Values
The JavaScript syntax defines two types of values:
Literals (Fixed values)
Variables (Variable values)

//8 DataTypes:
let university = "AIUB"; 
console.log(typeof university); //string

let uni = 'A'; 
console.log(typeof uni); //string

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

let n = null;
console.log(typeof n); //object
let n1 = 1;
let n2 = 1.9888;
let n3 = 3.0998080989098;
console.log(typeof n1);
console.log(typeof n2);
console.log(typeof n3);

console.log(typeof "meow");
console.log(typeof 'm');

let testBool = true;
console.log(typeof testBool);

let testUndefine;
console.log(typeof testUndefine);

let testNull = null;
console.log(typeof testNulls);

let arr = [1, "meow", [], {}];
console.log(typeof arr);

let num1 = 10;
let num2 = 20;
// Object
const person = {firstName:"John", lastName:"Doe"};
// Array object
const cars = ["Saab", "Volvo", "BMW"];
// Date object
const date = new Date("2022-03-25");
// Symbol
const s = Symbol();
*/

// The Switch Statement
let num1 = 10, num2 = 20;
switch(num1 > num2){
    case true:
        console.log("num1 is greater than num2");
        break;
    case false:
        console.log("num2 is greater than num1");
        break;
    default:
        console.log("Both numbers are equal");
}


//Ternary Operator
console.log((num1 == num2) ? "Both numbers are equal" : (num1 > num2) ? 
"num1 is greater than num2" : "num2 is greater than num1");


//Arrays & Loop
let arr = ["meow", 3.62, { id: "23-55488-3" }];

// Normal function
arr.forEach(function(a) {
    console.log(a);
});

// Insert
arr.push({ name: "Samir" });   // Add object at the end
arr.unshift("Hi");             // Add at the beginning

console.log("Length of array is:", arr.length);

// Arrow function
arr.forEach((a) => {
    console.log(a);
});

// Remove
arr.pop();     // Removes the last element
arr.shift();   // Removes the first element

// Print indexes
for (let index in arr) {
    console.log(index);
}

// Print values
for (let value of arr) {
    console.log(value);
}



/*In JavaScript, functions are first-class objects, meaning they can be:
stored in variables, passed as parameters, returned from other functions. */
function test() {

    if (true) {
        var d = "var";
        let e = "let"
    }

    console.log(d); // can be access
    //console.log(e); //Out of scope
}
test();

function normalFunction(){
    console.log("Normal Function");
}
normalFunction();


function returnFunction(){
    return "Return Function";
}
console.log(returnFunction());


function defaultParameterFunction(x = "Default"){
    console.log(x + " Parameter Function");
}
defaultParameterFunction();


let anonymousFunction = function(){
    console.log("Anonymous Function");
}
anonymousFunction();

    
let arrowFunction = () => {
    console.log("Arrow Function");
}
arrowFunction();

let arrowOneParaFunction = p => {
    console.log("Arrow Function " + p);
}
arrowOneParaFunction("With One Parameter");


let arrowOneLineFunction = l => "Arrow Function " + l;
console.log(arrowOneLineFunction("In One Line"));



//Object : An object is a collection of properties and methods.
const student = {
    name : "Samir",
    id : "23-55488-3",

    courseName : function() {
        console.log("Web Tech");
    }
}

console.log(typeof student);

student.cgpa = 3.62;
student.name = "arafat";

console.log(student.name);
console.log(student["id"]);
student.courseName();


//String