let display = document.getElementById("display");
let error = document.getElementById("error");

const inc = document.getElementById("inc");
let height = 150;
let width = 150;

inc.addEventListener("click", () => {
    if(width >= 300){
        error.innerHTML = "Maximum size reached."
    }
    else{
        height = height + 20;
        width = width + 20;
        display.style.width = width + "px";
        display.style.height = height + "px";    
        error.innerHTML = "";
    }
});

const dec = document.getElementById("dec");

dec.addEventListener("click", () => {
    if(width <= 100){
        error.innerHTML = "Minimum size reached."
    }
    else{
        height = height - 20;
        width = width - 20;
        display.style.width = width + "px";
        display.style.height = height + "px";
        error.innerHTML = "";    
    }
})


const circle = document.getElementById("circle");
let shape = "square";

circle.addEventListener("click", () => {
    error.innerHTML = "";
    if(shape === "square"){
        display.style.borderRadius = "50%";
        shape = "circle";
    }
    else{
        display.style.borderRadius = "0px";
        shape = "square";
    }
})

const color = document.getElementById("color");
let bgColor;

color.addEventListener("click", () => {
    error.innerHTML = "";
    if(bgColor === "tomato"){
        display.style.background = "steelblue";
        bgColor = "steelblue";
    }
    else{
        display.style.background = "tomato";
        bgColor = "tomato";
    }
})

const reset = document.getElementById("reset");

reset.addEventListener("click", () => {
    width = 150;
    height = 150;
    display.style.width = 150 + "px";
    display.style.height = 150 + "px";
    display.style.background = "steelblue";
    display.style.borderRadius = "0px";
    error.innerHTML = "";
})