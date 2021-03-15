// Assignment Code
var generateBtn = document.querySelector("#generate");

// "arrays" of characters that can be used.
var alphabetArray = "abcdefghijklmnopqrstuvwxyz";
var numbersArray = "1234567890";
var specialCharArray = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


console.log(alphabetArray[3].toUpperCase());
console.log(numbersArray[5]);
console.log(specialCharArray[0]);

var letters = false;
var numbers = false;
var upperCase = false;
var lowerCase = false;
var specialCharacters = false;
var length = 8;

//generatePassword function needs to be created.
function generatePassword(){

  var password = "test";

  return password;
}


//password criteria. Letters, numbers, Uppercase, lowercase, special character, lenght of password.
//password must be between 8 and 128 character long.


//select array randomly
//select charcter from array. if it is from the letters array and only the upper case option is selected make sure it is uppercase
//if only lowercase is selected select only lowercase if both are selected randomly decide if the character is upper or lower.


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
