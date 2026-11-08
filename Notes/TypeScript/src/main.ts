import { Person } from "./Person.js";
import { Student } from "./Student.js";

// Abstract Class: Cannot create an instance/object directly
// const person = new Person("ARS", 23);
// person.showDetails();

const std1 = new Student("23-55488-3", "ARS", 23, "CSE");
std1.showDetails();
std1.print();
