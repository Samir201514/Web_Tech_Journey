const btn = document.getElementById("btn");

// Two Parameters : "event", function(){}
btn.addEventListener("click", function(){
    alert("Button Clicked");
});

// Don't use arrow function while using "this" keyword
btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "blue";
});

btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = "";
});


const txt = document.getElementById("txt");

txt.addEventListener("keypress", (event)=>{
    if(event.key === 's'){
        alert("s key is not allowed")
    }
});