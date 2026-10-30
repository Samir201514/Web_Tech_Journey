// Spread & Rest Operator
const oldCourse = ["WT", "CG", "RM", "Chemistry"];
const newCourse = [".NET", "AdvWT", "ML", "CN"];
const totalCourse = [...oldCourse, ...newCourse, "Thesis"];
console.log(totalCourse);



// Array Destructuring
const student1 = ["Samir", 3.62];
const [name, , department = "CSE"] = student1; // Skiping a Value & Set a Default Value
console.log(name, department);



// Object Destructuring
const student2 = {
    name: "Samir",
    id: "23-55488-3",
    cgpa: 3.62,
    address: {
        city: "Dhaka",
        zip: 1216
    },
    course: ["CN", "AWT", ".NET", "ML"]
};

// Can rename(name alias) the variables name & order doesn't matter
const { address: {zip: zipCode}, course:[mainCourse, , , minor1], id: studentId, name: studentName } = student2;
console.log(studentName, studentId, mainCourse, minor1, zipCode);



//Array of Object
const course1 = {
    name: "AWT",
    credits: 3,
    isLab: true
}
const course2 = {
    name: ".NET",
    credits: 3,
    isLab: true
}
const stdCourse = [course1, course2];
console.log(stdCourse);


const course3 = {
    name: "ML",
    credits: 3,
    isLab: false
}

const stdCourseUpdate = [...stdCourse, course3]
console.log(stdCourseUpdate);




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

//map(element, index, array)
const ArrObjMap = stdCourseUpdate.map((n, index) => (++index) + ") " + n.name);
console.log(ArrObjMap)



// filter() method creates a new array containing only the elements that pass a condition.
//return array
const ArrObjFilter = stdCourseUpdate.filter(f => f.isLab == true)
console.log(ArrObjFilter)


//find() method returns the first element that satisfies a condition.
//return only 1 object
const ArrObjFind = stdCourseUpdate.find(f => f.credits == 3)
console.log(ArrObjFind);



// includes() checks whether an array or string contains a specific value. It returns a Boolean (true or false)
const ArrObjIncludes = stdCourseUpdate.map(i => i.name);
console.log(ArrObjIncludes.includes(".NET"))



//some() checks whether at least one element in an array satisfies a given condition. It returns true if at least one element matches; otherwise, it returns false.
const ArrObjSome = stdCourseUpdate.some(i => i.credits === 3);
console.log(ArrObjSome)


//every() checks whether all elements in an array satisfy a given condition. It returns true only when every element passes the condition.
const ArrObjEvery = stdCourseUpdate.every(i => i.credits === 3);
console.log(ArrObjEvery)


//reduce() processes all array elements and combines them into a single accumulated result.
//Syntex
// array.reduce((accumulator, currentValue) => {
//     return updatedAccumulator;
// }, initialValue);

const ArrObjReduce = stdCourseUpdate.reduce((total, course) => {
    return total + course.credits;
}, 0);
console.log(ArrObjReduce)



//sort() arranges the elements of an array in a particular order, such as ascending or descending order.
const ArrObjSortStr = stdCourseUpdate.sort((a,b) => a.name.localeCompare(b.name))
console.log(ArrObjSortStr)

const ArrObjSortNum = stdCourseUpdate.sort((a,b) => a.credits - b.credits)
console.log(ArrObjSortNum)



// Optional Chaining (?.) allows you to access an object's properties or methods without causing an error if an intermediate value is null or undefined
console.log(stdCourseUpdate?.department);



// Nullish Coalescing (??) provides a default value when the left-hand expression is either null or undefined.
console.log(stdCourseUpdate?.department ?? "CSE");