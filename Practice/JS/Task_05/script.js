const text = document.getElementById("text");
const btn = document.getElementById("btn");
const result = document.getElementById("result");


btn.addEventListener("click", () => {
    result.innerHTML = "";
    let trimedText = text.value.trim();
    let char = 0;
    let word = 0;
    let reverse;

    if(trimedText === "")
    {
        result.innerHTML =  
        `<br>
        <p> Write Something </p>
        <br>`;
    }
    else
    {
        char = trimedText.length;

        let trimedTextArray = trimedText.split(" ");
        for(let i=0; i<trimedTextArray.length; i++)
        {
            if(trimedTextArray[i] !== "")
            {
                word++;
            } 
        }

        reverse = trimedText.split("").reverse().join("");
        
        result.innerHTML = 
        `<br>
        <p> Total Characters : ${char} </p>
        <p> Total Words : ${word} </p> 
        <p> Reverse Text : ${reverse} </p>
        <br>`;
    }
    result.style.backgroundColor = "cyan";
    result.style.width = "500px";
    result.style.border = "2px solid black";
});