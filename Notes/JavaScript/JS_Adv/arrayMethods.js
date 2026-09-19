// Spread Operator
const oldCourse = ["WT", "CG", "RM", "Chemistry"];
const newCourse = [".NET", "AdvWT", "ML", "CN"];
const totalCourse = [...oldCourse, ...newCourse, "Thesis"];
console.log(totalCourse);


// map() is an array method that goes through every element of an array and creates a new array based on what you return. Does NOT modify the original array.

const numbers = [1, 2, 3];
// const doubled = numbers.map(
//     function(num){
//         return num*2;
//     }
// )
// Using arrow function
const doubled = numbers.map(n => n*2);

console.log(numbers);
console.log(doubled);



// Array Destructuring
const student1 = ["Samir", 3.62];
const [name, , department = "CSE"] = student1; // Skiping a Value & Set a Default Value

console.log(name, department);



// Object Destructuring
const student2 = {
    name: "Samir",
    id: "23-55488-3",
    cgpa: 3.62
};

// Can rename the variables name & order doesn't matter
const { id: studentId, name: studentName } = student2;
console.log(studentName, studentId);