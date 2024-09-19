const signupBtn = document.getElementById("signupBtn");
const signinBtn = document.getElementById("signinBtn");
const nameField = document.getElementById("nameField");
const title = document.getElementById("title");

// show OR hide password ---------------------------------
const pass_field = document.querySelector('.pass-field');
const show_pass = document.querySelector(".show-pass");
show_pass.addEventListener("click",()=>{
    if(pass_field.type === 'password'){
        pass_field.type = 'text';
        show_pass.classList.add("fa-eye-slash");
        show_pass.classList.remove("fa-eye");
    }else{
        pass_field.type = 'password';
        show_pass.classList.remove("fa-eye-slash");
        show_pass.classList.add("fa-eye");
    }
})
// -------------------------------------------------------

signinBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signinBtn.classList.remove("disable");
    signupBtn.classList.add("disable");
}

signupBtn.onclick = function(){
    nameField.style.maxHeight = "65px";
    title.innerHTML = "Sign Up";
    signinBtn.classList.add("disable");
    signupBtn.classList.remove("disable");
}