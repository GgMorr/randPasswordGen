let generateBtn = document.querySelector("#generate");

// Create variables to receive user input
let number = window.confirm("Would you like to use numbers?")
let upper = window.confirm("Would you like to use uppercase letters?")
let lower = window.confirm("Would you like to use lowercase letters?")
let special = window.confirm("Would you like to use special characters?")
let lengthOfPassword = parseInt(window.prompt("Select a password length between 8 to 128."))

// Create While to control user password length
while (lengthOfPassword < 8 || lengthOfPassword > 128)  {
    lengthOfPassword = parseInt(window.prompt("The password length must range betwwen 8 to 128"))
}

// Establish variables for random password text details
let library = ''
let numbers = '0123456789'
let lowers = 'abcdefghijklmnopqrstuvwxyz'
let uppers = 'ABCDEFGHIJKLMNPOQRSTUVWXYZ'
let specials = '@~#=$%^&*><+'

// Established IF statements for library access
if (number) library = library + numbers
if (upper) library = library + uppers
if (lower) library = library + lowers
if (special) library = library + specials

// Establish method to parse text content
library = library.split('')

// Created function to generate random numbers
function randomNumberGenerator(maxNum) {
    let randomNum = Math.floor(Math.random()*maxNum);
    return randomNum;
};

let password = '';

// Create function to control password length
for (let i=0; i<lengthOfPassword; i++) {
    password = password + library[randomNumberGenerator(library.length)];
}

// Create function to display password text on screen
function passwordWriter() {
    let passwordText = document.querySelector("#password");
    passwordText.value = password; 
}

generateBtn.addEventListener("click", passwordWriter);