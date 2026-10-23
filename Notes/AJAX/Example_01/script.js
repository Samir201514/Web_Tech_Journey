// AJAX stands for Asynchronous JavaScript and XML
// AJAX allows JavaScript to communicate with a server without reloading the entire webpage.

function showResult(name){
    if(name.length === 0){
        document.getElementById("sugg").innerHTML = "";
        return;
    }
    else{
        //XMLHttpRequest is a browser-provided JavaScript object that can send HTTP requests to a server.
        let xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                document.getElementById("sugg").innerHTML = this.responseText;
            }
        }

        xmlhttp.open("GET", "sugg.php?s=" + encodeURIComponent(name), true);
        xmlhttp.send();
    }
}