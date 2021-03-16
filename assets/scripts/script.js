// Assignment Code
var generateBtn = document.querySelector("#generate");

// "arrays" of characters that can be used.
var alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var alphabetUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbersArray = "1234567890".split("");
var specialCharArray = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
var passwordArraySelction = [];
var myPassword = [];

//generatePassword function needs to be created.
function generatePassword(){
  var password = "test";
  var includeUpperCase = false;
  var includeLowerCase = false;

  //prompts for user to enter a password length between 8 and 128 and repeats if the entered value does not match.
  var passwordLengthPrompt = window.prompt("Pick a password length between 8 and 128 characters."); 
  //confirms that the entered amount was valid.
  if(parseInt(passwordLengthPrompt) >= 8 && parseInt(passwordLengthPrompt) <= 128){
    var lengthOfPassword = passwordLengthPrompt;
  }else{
    window.alert("The entered amount was not valid please press ok to restart.");
    generatePassword();
  }

  //checks if the user would like to use letters. and if they do weather they want uppercase and lowercase.
  var includeLetters = window.confirm("Do you want letters in your password?\n" + "Click okay for yes and cancel for no.");
  if(includeLetters){
    includeUpperCase = window.confirm("Would you like uppercase letters?\n" + "Click okay for yes and cancel for no.");
    if(includeUpperCase)passwordArraySelction.push("uppercase");
    includeLowerCase = window.confirm("Would you like lowercase letters?\n" + "Click okay for yes and cancel for no.");
    if(includeLowerCase)passwordArraySelction.push("lowercase");
  }

  //checks weather the user would like to user numbers in the password.
  var includeNumbers = window.confirm("Do you want numbers in your password?\n" + "Click okay for yes and cancel for no.");
  if(includeNumbers)passwordArraySelction.push("numbers");

  var includeSpecialCharacters = window.confirm("Do you want Special Characters. in your password?\n" + "Click okay for yes and cancel for no.");
  if(includeSpecialCharacters)passwordArraySelction.push("specialcharacters");
  
  //if includeuppercase is true add the uppercase alphabet to the my password array.
  if(passwordArraySelction.indexOf("uppercase") !== -1){
    myPassword.push(alphabetUpperCase);
    console.log(myPassword);
  }

  if(passwordArraySelction.indexOf("lowercase") !== -1){
    myPassword.push(alphabetLowerCase);
  }

  if(passwordArraySelction.indexOf("numbers") !== -1){
    myPassword.push(numbersArray);
  }

  if(passwordArraySelction.indexOf("specialcharacters") !== -1){
    myPassword.push(specialCharArray);  
  }

  console.log(myPassword[25]);

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
