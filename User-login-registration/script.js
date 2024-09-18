const signupBtn = document.getElementById("signupBtn");
const signinBtn = document.getElementById("signinBtn");
const nameField = document.getElementById("nameField");
const title = document.getElementById("title");

signinBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signinBtn.classList.toggle("disable");
    signupBtn.classList.toggle("disable");
}

signupBtn.onclick = function(){
    nameField.style.maxHeight = "65px";
    title.innerHTML = "Sign Up";
    signinBtn.classList.toggle("disable");
    signupBtn.classList.toggle("disable");
}