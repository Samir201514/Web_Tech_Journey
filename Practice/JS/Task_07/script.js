const p = document.querySelector("p");
const btn = document.querySelectorAll("button");
let size = 20;

btn[0].addEventListener("click", () => {
    p.style.background = "cyan";
})

btn[1].addEventListener("click", () => {
    size = size + 5;
    p.style.fontSize = size + "px";
})

btn[2].addEventListener("click", () => {
    p.style.textAlign = "center";
})

btn[3].addEventListener("click", () => {
    p.style.background = "";
    p.style.fontSize = "";
    p.style.textAlign = "";

})