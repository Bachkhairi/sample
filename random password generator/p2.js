const passwordbox = document.getElementById("password");
const length = 6 + Math.floor(10*Math.random());

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789";
const symbol = "@#$%^&*()-+~é{}]\`=[²";
const allChars = upperCase + lowerCase + numbers + symbol;
function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordbox.value = password;




}

function copy(){
    passwordbox.select();
    document.execCommand("copy");

}