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
