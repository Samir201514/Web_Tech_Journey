const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    let hasErr = false;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const conPass = document.getElementById("conPass").value;
    const phone = document.getElementById("phone").value.trim();

    const nameErr = document.getElementById("nameErr");
    const emailErr = document.getElementById("emailErr");
    const passErr = document.getElementById("passErr");
    const conPassErr = document.getElementById("conPassErr");
    const phoneErr = document.getElementById("phoneErr");

    nameErr.innerHTML = "";
    emailErr.innerHTML = "";
    passErr.innerHTML = "";
    conPassErr.innerHTML = "";
    phoneErr.innerHTML = "";

    if(name === ""){
        nameErr.innerHTML = "Name can not be empty";
        hasErr = true;
    }

    if(email === ""){
        emailErr.innerHTML = "Email can not be empty";
        hasErr = true;
    }
    else{
        if(!email.includes("@") || !email.includes(".")){
            emailErr.innerHTML = 'Email must contain "@" and "."';
            hasErr = true;
        }
    }
    
    if(password === ""){
        passErr.innerHTML = "Password can not be empty";
        hasErr = true;
    }
    else{
        if(password.length < 6){
            passErr.innerHTML = "Password must be at least 6 characters";
            hasErr = true;
        }
    }

    if(conPass === ""){
        conPassErr.innerHTML = "You have to enter your password again";
        hasErr = true;
    }
    else{
        if(conPass !== password){
            conPassErr.innerHTML = "Password does not matched";
            hasErr = true;
        }
    }

    if(phone === ""){
        phoneErr.innerHTML = "Phone number can not be empty";
        hasErr = true;
    }
    else{
        if(isNaN(phone)){
            phoneErr.innerHTML = "Phone number can not be any character";
            hasErr = true;
        }
    }
    
    if(!hasErr){
        alert("Registration Successful!");
    }
    else{
        event.preventDefault();
    }
})