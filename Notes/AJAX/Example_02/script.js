const form = document.getElementById("form");
const div = document.getElementById("div");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const jsonObj = this.responseText;
            const jsObj = JSON.parse(jsonObj);

            div.innerHTML = "<h1>" + jsObj.name + "</h1> <p>" + jsObj.age + "</p>";
        }
    }

    xmlhttp.open("POST", "data.php", true);
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    var text = "text=" + encodeURIComponent(document.getElementById("text").value);

    xmlhttp.send(text);
})