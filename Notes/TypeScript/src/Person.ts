// Interface: Defines the structure/contract of a class
interface IPerson {
  showDetails: () => void;
}

// Abstraction: Abstract class cannot be instantiated directly
export abstract class Person implements IPerson {
  constructor(
    // Encapsulation:
    // private property cannot be accessed directly outside the class
    private name: string,
    // protected: Accessible inside this class and its child classes
    protected age: number,
  ) {}

  // Setter: Updates the private name property
  setName(name: string) {
    this.name = name;
  }

  // Getter: Returns the private name property
  getName(): string {
    return this.name;
  }

  // Concrete method: Has an implementation/body
  showDetails() {
    console.log(`Name : ${this.name}\nAge : ${this.age}`);
  }

  // Abstract method: Has no implementation/body; child classes must implement it
  abstract print(): void;
}
