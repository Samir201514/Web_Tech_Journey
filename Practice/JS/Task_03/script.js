const btn = document.getElementById("btn");
const body = document.body;
let mode = "white";

btn.addEventListener("click", () => {
    if(mode === "white"){
        body.style.background = "black";
        body.style.color = "white";
        btn.innerHTML = "Light Mode";
        mode = "black";
    }
    else{
        body.style.background = "white";
        body.style.color = "black";
        btn.innerHTML = "Dark Mode";
        mode = "white";
    }
});