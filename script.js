//Arrays for password length lowercase letters, uppercase letters, numbers, and symbols.
var choiceArr = [];
var howLong = [];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = lower.map(element => {
  return element.toUpperCase();
});
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "#", "$", "%", "$", "'", "(", ")", "*", "+", "-", ",", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "~"]


function popUps() {

  choiceArr = [];

  howLong = parseInt(prompt("How many characters long would you like your password to be?\n(Must be between 8 and 128)"));

  if(isNaN(howLong) || howLong < 8 || howLong > 128) {
    alert("Password length must be a number between 8 and 128. Please try again.");
    return false;
  }

  if (confirm("Select 'OK' if you would like to include lowercase letters in your password.")) {
    choiceArr = choiceArr.concat(lower);
  }

  if (confirm("Select 'OK' if you would like to include uppercase letters in your password.")) {
    choiceArr = choiceArr.concat(upper);
  }

  if (confirm("Select 'OK' if you would like to include numbers in your password.")) {
    choiceArr = choiceArr.concat(number);
  }

  if (confirm("Select 'OK' if you would like to include symbols in your password.")) {
    choiceArr = choiceArr.concat(symbol);
  }

  if 

  return true;

}

function generatePassword () {
  var password = "";

  for(var i=0; i < howLong; i++) {
    var randomInput = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomInput];
  }

  return password

}



 // Assignment Code
 var generateBtn = document.querySelector("#generate");

 // Write password to the #password input
 function writePassword() {

  var completePopUps = popUps();

  if(completePopUps) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password; 
  } 

 }
 
 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);