const clock = document.getElementById("clock");

setInterval(currentDateTime, 1000);

function currentDateTime(){
    let current = new Date();
    // let date = current.toLocaleDateString();
    // let time = current.toLocaleTimeString();

    let year = current.getFullYear();
    let month = current.getMonth() + 1;
    let date = current.getDate();
        
    let hr = current.getHours();
    let hr12F;
    if(hr >= 1 && hr <= 11){
        hr12F = hr + "AM";
    }
    else if(hr === 0){
        hr12F = hr + 12 + "AM";
    }
    else if(hr === 12){
        hr12F = hr + "PM";
    }
    else{
        hr12F = hr - 12 + "PM";
    }
    let min = current.getMinutes();
    let sec = current.getSeconds();
    
    clock.innerHTML = 
    `${date} - ${month} - ${year}
    <br>
    ${hr12F} : ${min} : ${sec}`;
}