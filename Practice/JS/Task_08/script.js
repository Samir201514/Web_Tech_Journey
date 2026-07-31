const selected = document.getElementById("selected");
const roll = document.getElementById("roll");
const dept = document.getElementById("dept");

selected.addEventListener("change", () => {
    if(selected.value === "student"){
        roll.style.display = "block";
        dept.style.display = "none";
    }
    else if(selected.value === "teacher"){
        roll.style.display = "none";
        dept.style.display = "block";
    }
    else{
        roll.style.display = "none";
        dept.style.display = "none";
    }
});
