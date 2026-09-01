// JavaScript is Case Sensitive
console.log("Hello World");

// Can be Redeclared
var a = 10;
var a = 20;
console.log(a);


//let have Block Scope; cannot be Redeclared in the same scope
let x;
console.log(x); //undefined


/*
cannot be Redeclared
Variables defined with const cannot be Reassigned
Variables defined with const have Block Scope

You can NOT:
Reassign a constant value
Reassign a constant array
Reassign a constant object

But you CAN:
Change the elements of constant array
Change the properties of constant object
*/
const id = "23-55488-3";


/* 
Always use const if the value should not be changed
Always use const if the type should not be changed (Arrays and Objects)
Only use let if you cannot use const 
*/

/*
   ==  : Checks Only Value  
   === : Checks Both Value & Data Type 
*/