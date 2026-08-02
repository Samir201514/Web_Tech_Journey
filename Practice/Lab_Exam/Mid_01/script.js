const inputFields = document.getElementsByTagName("input");
const errorMsg = document.getElementById("errorMsg");
const cardDiv = document.getElementById("cardDiv")

function validForm(){
    let hasErr = false;

    if(inputFields[0].value === "" || inputFields[1].value === "" || inputFields[2].value === "" || inputFields[3].value === "")
    {
        errorMsg.innerHTML = "***Please fill in all fields***";
        errorMsg.style.color = "red";
        hasErr = true;
    }
    else{
        let empCategory;
        if(inputFields[3].value >= "50000"){
            empCategory = "Senior Employee";
            cardDiv.style.background = "lightgreen";
        }
        else{
            empCategory = "Junior Employee";
            cardDiv.style.background = "lightyellow";
        }
        cardDiv.innerHTML = 
        `Employee's Name: ${inputFields[0].value}, Employee ID: ${inputFields[1].value}, Department: ${inputFields[2].value}, Monthly Salary: ${inputFields[3].value} and Employee Category: ${empCategory}`

        inputFields[0].value = "";
        inputFields[1].value = "";
        inputFields[2].value = "";
        inputFields[3].value = "";
        errorMsg.innerHTML = "";
    }
    return false;
}

const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
    cardDiv.innerHTML = "";
    cardDiv.style.background = "";

    inputFields[0].value = "";
    inputFields[1].value = "";
    inputFields[2].value = "";
    inputFields[3].value = "";

    errorMsg.innerHTML = "";
})