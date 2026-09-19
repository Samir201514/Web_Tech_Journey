// A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method.

class Student {
    constructor(name){
        this.name = name;
    }

    showDetails(){
        console.log(`Student Name : ${this.name}`);
    }
}

// The constructor function is called automatically when the object is initialized.
const s1 = new Student("Samir");
s1.showDetails();