//Arrays & Loop
let arr = ["meow", 3.62, { id: "23-55488-3" }];

// Normal function
arr.forEach(function(a) {
    console.log(a);
});

// Insert
arr.push({ name: "Samir" });   // Add object at the end
arr.unshift("Hi");             // Add at the beginning

console.log("Length of array is:", arr.length);

// Arrow function
arr.forEach((a) => {
    console.log(a);
});

// Remove
arr.pop();     // Removes the last element
arr.shift();   // Removes the first element

// Print indexes
for (let index in arr) {
    console.log(index);
}

// Print values
for (let value of arr) {
    console.log(value);
}