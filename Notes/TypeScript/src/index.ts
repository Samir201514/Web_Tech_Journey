// TypeScript builds on top of JavaScript.

// TypeScript is a statically typed superset of JavaScript. It builds on JavaScript by adding types and other features. Any valid JavaScript program is generally valid TypeScript. Its help to check Compile-Time Error

// Browsers don't natively understand TypeScript. The TypeScript Compiler (tsc) converts .ts files into .js files. This conversion is called Transpilation.

// ==================== DATA TYPES ====================
// Number
let num: number = 10;
console.log(num);

// String
let name: string = "Samir";
console.log(name);

// Boolean
let pass: boolean = true;
console.log(pass);

// Array: Stores multiple values of the same type.
let arr: number[] = [1, 2, 3, 4, 5];
console.log(arr);

// Tuple: Fixed number of elements with specific types and order.
let user: [number, string] = [101, "ARS"];
console.log(user);

// ==================== OBJECT & TYPE ALIASES ====================

// Type Alias: Creates a custom name for a type.
type Student = {
  id: string;
  name?: string;
  admittedAt: (date: Date) => void;
};

const std1: Student = {
  id: "23-55488-3",
  admittedAt: (date: Date) => {
    console.log(date);
  },
};
console.log(std1);

// Intersection(&) Types: Combines multiple types into one.
type human = {
  humanAttribute: boolean;
};

type superHuman = {
  superHumanAttribute: boolean;
};

type avenger = human & superHuman;

let hulk: avenger = {
  humanAttribute: true,
  superHumanAttribute: true,
};

// Enum: Defines a set of named constants. Numeric enums start from 0 by default.
enum Days {
  Friday = 1, // Default Value is 0
  Saturday,
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
}
console.log(Days.Sunday);

// any: Disables type checking for a variable.
// unknown: Accepts any value but requires type checking before use.
// never: Represents a value that never occurs or a function that never returns.

// ==================== FUNCTIONS ====================
// Optional Parameter: b? means the argument can be omitted.
// Default Parameter: b = 20 provides a default value.
// Union Type (|): Allows a variable to have multiple types.
// Type Narrowing: Checks the actual type before performing an operation.

// function addition(a: number, b?: number): number{ // optional value
function addition(a: number | string /* Union Type */, b: number = 20): number {
  // default value
  if (typeof a === "number") {
    // Type Narrowing
    return a + b;
  } else {
    return b;
  }
}
console.log(addition(10));
