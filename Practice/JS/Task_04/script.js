// • When clicked:
//         • When Delete is clicked:
//         ▪ Remove that row from the table.
//         • Validate that no field is empty before adding a new row.
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const table = document.getElementById("table");
    const name = document.getElementById("name");
    const roll = document.getElementById("roll");
    const dept = document.getElementById("dept");
    const nameErr = document.getElementById("nameErr");
    const rollErr = document.getElementById("rollErr");
    const deptErr = document.getElementById("deptErr");

    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const deleteBtn = document.createElement("button");
    
    if(name.value !== "" && roll.value !== "" && dept.value !== ""){
        td1.innerHTML = name.value;
        td2.innerHTML = roll.value;
        td3.innerHTML = dept.value;
        deleteBtn.innerHTML = "Delete";
        td4.appendChild(deleteBtn);
        
        deleteBtn.addEventListener("click", () => {
            tr.remove();
        })
        tr.append(td1, td2, td3, td4);
        table.appendChild(tr);
                
        name.value = "";
        roll.value = "";
        dept.value = "";
        nameErr.innerHTML = "";
        rollErr.innerHTML = "";
        deptErr.innerHTML = "";
    }
    else{
        if(name.value === "")
        {
            nameErr.innerHTML = "Name can not be empty";
        }
        else{
            nameErr.innerHTML = "";
        }
        if(roll.value === "")
        {
            rollErr.innerHTML = "Roll can not be empty";
        }
        else{
            rollErr.innerHTML = "";
        }
        if(dept.value === "")
        {
            deptErr.innerHTML = "Department can not be empty";
        }
        else{
            deptErr.innerHTML = "";
        }
    }
})