import { Person } from "./Person.js";

// Inheritance: Student inherits properties and methods from Person
export class Student extends Person {
  constructor(
    protected id: string,
    name: string,
    age: number,
    protected dept: string,
  ) {
    // Calls the parent class constructor
    super(name, age);
  }

  // Method Overriding: Provides a new implementation of the parent method
  override showDetails() {
    super.showDetails(); // Calls the parent class method
    console.log(`ID : ${this.id}\nDepartment : ${this.dept}`);
  }

  // Implements the abstract method declared in Person
  override print(): void {
    console.log("This is a Abstract Method");
  }

  // TypeScript supports method overloading through multiple signatures
  // JavaScript does not support traditional method overloading
}
