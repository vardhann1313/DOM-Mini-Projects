const passwordBox = document.getElementById("password");
let length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@&#^$";

const allChars = upperCase + lowerCase + number + symbol ;

// Generating Password ----------------------------------------------------
function createPassword(){
    let password = "";
    
    while(length > 0){
        password += allChars[Math.floor(Math.random() * allChars.length)];
        length--;
    }
    passwordBox.value = password;
    length = 12;
}
// ------------------------------------------------------------------------

// Copying password -------------------------------------------------------
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}
// ------------------------------------------------------------------------