let images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ42rJWFRi-DlnBsP9nyQhcAudgz9hIK56zKrlYg3vThl-Xjpv2fEZyxEjB&s=10", 
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWZliCFhV3L5uLRLzcc47xGc9YcpjiPfQsH0FSNG0a1jeiyIBbk17t9fw&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqqJYy9zPBesa1wj-gk4oRZMC1C6uc9ffZuxtfDwcnmQ&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi896hbm6U89a-VHCF7cLV9AkVHvTdYBYlcTEGEAk7oQ&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp_zVeiRWfEuciWzPY70vU3nNk4gYvbwyrr_uvIqGiQg&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00RJmXtb3j9pkg-S4Ou9q1fE3HzmuA8twtAJCO0mV9Q&s=10"];

const img = document.getElementById("img");
const pre = document.getElementById("pre");
const next = document.getElementById("next");
let index = 0;

function nextFunction(){
    if(index === images.length - 1){
        index = 0;
    }
    else{
        index = index + 1;
    }
    img.src = images[index];
}
next.addEventListener("click", nextFunction);


function preFunction(){
   if(index === 0){
        index = images.length - 1;
    }
    else{
        index = index - 1;
    }
    img.src = images[index];
}
pre.addEventListener("click", preFunction);

setInterval(nextFunction, 3000);