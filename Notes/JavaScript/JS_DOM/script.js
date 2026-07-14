// DOM = Document Object Model
/* The DOM API is a standard for how to get, change, add, or delete HTML DOM elements.
JavaScript is the language used in browsers to access the DOM through the API.*/

//HTML DOM
/* Access a Element
If the element is found, the method will return the element as an object (in variable).
If the element is not found, element will contain null.
 */
const span1 = document.getElementById("sp1");

// Change the content of the Element
span1.innerHTML = "<h1> MD. ARAFAT RAHMAN SAMIR </h1>";

/*
Here,
document is the HTML document.
getElementById() is a document method.
id="sp1" is an HTML property
getElementById() is a DOM Method.
innerHTML is a DOM Property.
span1.innerHTML changes the property.
*/


// Selecting HTML Elements
console.log(document.getElementsByTagName("p"));
console.log(document.getElementById("sp1"));
console.log(document.getElementsByClassName("sp"));
console.log(document.querySelector(".sp"));
console.log(document.querySelectorAll(".sp"));
s = document.querySelectorAll(".sp");
s[0].innerHTML = "Form_JS";
console.log(s[1]);


// Changing an Attribute
//document.getElementsByClassName("p1").id = "p1";
//p1.id = "p1";

document.getElementById("sp3").innerHTML = "<h1> Hello </h1>";
document.getElementById("sp4").innerText = "<h1> Hello </h1>";
document.getElementById("sp5").textContent = "MD. ARAFAT RAHMAN SAMIR";


// Changing CSS
const div = document.getElementById("div");
div.style.background = "red";
div.style.color = "yellow";
div.style.width = "200px";
div.style.height = "200px";
div.style.border = "2px solid black";
div.style.outline = "5px solid green";
div.style.display = "inline";


// Creating a New Element
const newDiv = document.createElement("div");

// Adding Content
const newP = document.createElement("p");
newP.innerText = "New Div Paragrah.";
newDiv.appendChild(newP);

// Adding Attribute
newDiv.setAttribute("id", "newDiv");
// Removing Attribute
//newDiv.removeAttribute("id");

newDiv.classList.add("newDivClass1");
newDiv.classList.add("newDivClass2");
//newDiv.classList.remove("newDivClass1");

// Add the Element to the Page
const body = document.body;
body.appendChild(newDiv);