// DOM = Document Object Model
/* The DOM API is a standard for how to get, change, add, or delete HTML DOM elements.
JavaScript is the language used in browsers to access the DOM through the API.*/

//HTML DOM
// Access a paragraph Element
/*const element = document.getElementById("intro");
If the element is found, the method will return the element as an object (in element).
If the element is not found, element will contain null.
 */
const span1 = document.getElementById("sp1");

// Change the content of the Element
span1.innerHTML = "<h1> MD. ARAFAT RAHMAN SAMIR </h1>";

/*
Here,
id="sp1" is an HTML property
getElementById() is a DOM Method
innerHTML is a DOM Property 

document is the HTML document.
getElementById() is a document method.
myPara = getElementById("demo") retrieves the "demo" element.
innerHTML is an element property.
myPara.innerHTML = "Hello World!" changes the property.
*/


// Selecting HTML Elements
console.log(document.getElementsByTagName("p"));
console.log(document.getElementById("sp1"));
console.log(document.getElementsByClassName("sp"));
console.log(document.querySelector(".sp"));
console.log(document.querySelectorAll(".sp"));
s = document.querySelectorAll(".sp");
s[0].innerHTML = "Form JS";
console.log(s[1]);
/*<p class="demo">One</p>
<p class="demo">Two</p>

<script>
// Access a paragraph Element
const myItems = document.querySelectorAll(".demo");

// Change the content of the Element
myItems[0].innerHTML = "First";*/



// Changing an Attribute
//document.getElementsByClassName("p1").id = "p1";
//p1.id = "p1";



document.getElementById("sp2").textContent = "MD. ARAFAT RAHMAN SAMIR";



//Changing CSS
document.getElementById("sp2").style.backgroundColor = "red";



document.getElementById("sp3").innerHTML = "<h1> Hello </h1>";
document.getElementById("sp4").innerText = "<h1> Hello </h1>";