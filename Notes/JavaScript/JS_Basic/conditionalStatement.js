// The Switch Statement
let num1 = 10, num2 = 20;
switch(num1 > num2){
    case true:
        console.log("num1 is greater than num2");
        break;
    case false:
        console.log("num2 is greater than num1");
        break;
    default:
        console.log("Both numbers are equal");
}


//Ternary Operator
console.log((num1 == num2) ? "Both numbers are equal" : (num1 > num2) ? 
"num1 is greater than num2" : "num2 is greater than num1");