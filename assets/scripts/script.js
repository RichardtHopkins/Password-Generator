// Assignment Code
var generateBtn = document.querySelector("#generate");

// "arrays" of characters that can be used.
var alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var alphabetUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbersArray = "1234567890".split("");
var specialCharArray = " !#$%&'()*+-./:;<=>?@[\]^_`{|}~'" .split("");


//shuffles an array that is passed to the function and returns it.
function shuffleArray(array) {
  var i, randIndex, swapIndex;
  for (i = array.length - 1; i > 0; i--) {
      randIndex = Math.floor(Math.random() * (i + 1));
      swapIndex = array[i];
      array[i] = array[randIndex];
      array[randIndex] = swapIndex;
  }
  return array;
}

//takes an array and selects random indeces to the amount of the specified lenght. then returns the new array.
function randomSelection(array, length){
  var newPassword = [];
  var i, selectedIndex;
  for (i = 1 ; i <= length; i++) {
    selectedIndex = Math.floor(Math.random() * array.length);
    newPassword.push(array[selectedIndex]);
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
    //if the amount was not valid restart and return nothing.
    window.alert("you did not enter a valid length. Press Generate Password to try again.");
    return "";
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

  //prints that the user didnt select anything if no password criteria where selected and returns nothing.
  if(myPassword.length === 0){
    window.alert("you have selected no options.\n" +
    "please press Generate Password to start again."
    );
    return "";
  }

  //shuffles the array created by the selection made by the user.
  myPassword = shuffleArray(myPassword);
  //passes the shuffled array to the randomSelection function to select random characters from the my password according to the length selected by the user.
  myPassword = randomSelection(myPassword, lengthOfPassword);
  //joins the final arry into a string. (removes the commas seperating the array items.)
  myPassword = myPassword.join("");

  //return the final password string when the generatePassword function is run.
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
