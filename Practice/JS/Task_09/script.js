// Connected with HTML/Task_01

function currentDateTime(){
    const clock = document.getElementById("clock");
    let current = new Date();
    let hr = current.getHours();

    let greeting;
    if(hr >= 6 && hr <= 12){
        greeting = "Good Morning";
    }
    else if(hr >= 12 && hr <= 17){
        greeting = "Good Afternoon";
    }
    else if(hr >= 17 && hr <= 20){
        greeting = "Good Evening";
    }
    else{
        greeting = "Good Night";
    }

    clock.innerHTML = `${greeting}, MD. ARAFAT RAHMAN SAMIR`;
}
currentDateTime();

const aboutNav = document.getElementById("aboutNav");
const about = document.getElementById("about");
const projectsNav = document.getElementById("projectsNav");
const projects = document.getElementById("projects");
const contactNav = document.getElementById("contactNav");
const contact = document.getElementById("contact");

aboutNav.addEventListener("click", () => {
    about.style.display = "block";
    projects.style.display = "none";
    contact.style.display = "none";

})

projectsNav.addEventListener("click", () => {
    about.style.display = "none";
    projects.style.display = "block";
    contact.style.display = "none";
})

contactNav.addEventListener("click", () => {
    about.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "block";
})

function validContact(){
    let hasErr = false;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const textMsg = document.getElementById("textMsg").value.trim();

    const nameErr = document.getElementById("nameErr");
    const emailErr = document.getElementById("emailErr");
    const phoneErr = document.getElementById("phoneErr");
    const textMsgErr = document.getElementById("textMsgErr");

    nameErr.innerHTML = "";
    emailErr.innerHTML = "";
    phoneErr.innerHTML = "";
    textMsgErr.innerHTML = "";

    if(name === ""){
        nameErr.innerHTML = "Name can not be empty";
        hasErr = true;
    }

    if(email === ""){
        emailErr.innerHTML = "Email can not be empty";
        hasErr = true;
    }
    else{
        if(!email.includes("@") || !email.endswith(".com")){
            emailErr.innerHTML = 'Email must contain "@" and ends with ".com"';
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

    if(textMsg === ""){
        textMsgErr.innerHTML = "Write something";
        hasErr = true;
    }
    else{
        if(textMsg.length < 10){
            textMsgErr.innerHTML = "Text should be have atleast 10 characters";
            hasErr = true;
        }
    }

    if(!hasErr){
        return true;
    }
    else{
        return false
    }
}

// 5. DOM Styling 
// • Make content dynamic using JavaScript (change colors, show/hide sections, update text).

function domStyling(){
    about.style.backgroundColor = "cyan";

    projects.style.backgroundColor = "lime";
    projects.style.height = "250px";

    contact.style.backgroundColor = "lightblue";
}

domStyling();