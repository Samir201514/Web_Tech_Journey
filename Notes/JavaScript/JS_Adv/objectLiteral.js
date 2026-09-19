//Object : An object is a collection of properties and methods.
//Each on called Entry with Key-Value pairs.
const student = {
    name : "Samir",
    id : "23-55488-3",
    lang : "JavaScript",

    courseName : function() {
        console.log("Web Tech");
    }
}

console.log(typeof student);

student.name = {
    firstName : "arafat",
    lastName : "samir"
}; //Modify
console.log(student.name.lastName);


student.cgpa = 3.62; //Insert
console.log(student["id"]);


delete student.lang; //Delete


student.courseName();


console.log(student);


console.log(Object.entries(student));
console.log(Object.keys(student));
console.log(Object.values(student));