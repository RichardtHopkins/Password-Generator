// Assignment Code
var generateBtn = document.querySelector("#generate");

// "arrays" of characters that can be used.
var alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var alphabetUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbersArray = "1234567890".split("");
var specialCharArray = " !#$%&'()*+-./:;<=>?@[\]^_`{|}~'" .split("");


//shuffles generated password entered by the 
function shuffleArray(passwordArray) {
  var i, j, x;
  for (i = passwordArray.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = passwordArray[i];
      passwordArray[i] = passwordArray[j];
      passwordArray[j] = x;
  }
  return passwordArray;
}


function randomSelection(passwordArray, length){
  var newPassword = [];
  var i, selectedIndex;
  for (i = 1 ; i <= length; i++) {
    selectedIndex = Math.floor(Math.random() * passwordArray.length);
    newPassword.push(passwordArray[selectedIndex]);
    console.log(newPassword);
  }
  return newPassword;
}

//generatePassword function needs to be created.
function generatePassword(){
  
  //creates blank password array.
  var myPassword = [];

  //prompts for user to enter a password length between 8 and 128 and repeats if the entered value does not match.
  var passwordLengthPrompt = window.prompt("Pick a password length between 8 and 128 characters."); 
  //confirms that the entered amount was valid.
  if(parseInt(passwordLengthPrompt) >= 8 && parseInt(passwordLengthPrompt) <= 128){
    var lengthOfPassword = passwordLengthPrompt;
  }else{
    window.alert("The entered amount was not valid please press ok to restart.");
    generatePassword();
  }

  //checks if the user would like to use letters. and if they do weather they want uppercase and lowercase and adds them to the myPassword array.
  var includeLetters = window.confirm("Do you want letters in your password?\n" + "Click okay for yes and cancel for no.");
  if(includeLetters){
    var includeUpperCase = window.confirm("Would you like uppercase letters?\n" + "Click okay for yes and cancel for no.");
    if(includeUpperCase)myPassword = myPassword.concat(alphabetUpperCase);
    var includeLowerCase = window.confirm("Would you like lowercase letters?\n" + "Click okay for yes and cancel for no.");
    if (includeLowerCase)myPassword = myPassword.concat(alphabetLowerCase);
  }

  //asks if numbers should be included and adds them to the myPassword array if true.
  var includeNumbers = window.confirm("Do you want numbers in your password?\n" + "Click okay for yes and cancel for no.");
  if (includeNumbers)myPassword = myPassword.concat(numbersArray);

  //asks if speciala characters are to be included and if true add the to the my password array.
  var includeSpecialCharacters = window.confirm("Do you want Special Characters. in your password?\n" + "Click okay for yes and cancel for no.");
  if (includeSpecialCharacters)myPassword = myPassword.concat(specialCharArray);

  if(myPassword.length === 0){

  window.alert("you have selected no options.\n" +
  "please press Generate Password to start again."
  );
    return ;
  }

  myPassword = shuffleArray(myPassword);
  myPassword = randomSelection(myPassword, lengthOfPassword);
  myPassword = myPassword.join("");

  return myPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
