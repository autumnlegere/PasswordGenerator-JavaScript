//Arrays for selected password options, password length, lowercase letters, uppercase letters, numbers, and symbols.
var passwordOptions = [];
var howLong = [];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = lower.map(element => {
  return element.toUpperCase();
});
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "#", "$", "%", "$", "'", "(", ")", "*", "+", "-", ",", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "~"]

//Pop up boxes for each password criteria. Logs user's selections
function popUps() {

  //Resets password options array to blank
  passwordOptions = [];

  howLong = parseInt(prompt("How many characters long would you like your password to be?\n(Must be between 8 and 128)"));

  //If user input for password length is not a number or <8 or >128, page will show the following alert and restart the pop up prompts
  if(isNaN(howLong) || howLong < 8 || howLong > 128) {
    alert("Password length must be a number between 8 and 128. Please try again.");
    popUps()
    return false;
  }

  var selectLower = confirm("Select 'OK' if you would like to include lowercase letters in your password.")
  var selectUpper = confirm("Select 'OK' if you would like to include uppercase letters in your password.")
  var selectNumber = confirm("Select 'OK' if you would like to include numbers in your password.")
  var selectSymbol = confirm("Select 'OK' if you would like to include symbols in your password.")

  if (selectLower) {
    passwordOptions = passwordOptions.concat(lower);
  }

  if (selectUpper) {
    passwordOptions = passwordOptions.concat(upper);
  }

  if (selectNumber) {
    passwordOptions = passwordOptions.concat(number);
  }

  if (selectSymbol) {
    passwordOptions = passwordOptions.concat(symbol);
  }

  //If user hits cancel on all 4 password character options, page will show the following alert and restart the pop up prompts
  if (!selectLower && !selectUpper && !selectNumber && !selectSymbol) {
    alert("Please try again, you must select at least one character option for your password.");
    popUps()
  }

  return true;

}

//Function generates a password based on the criteria selected in pop-ups
function generatePassword () {
  var password = [];

  for(var i=0; i < howLong; i++) {
    var randomInput = Math.floor(Math.random() * passwordOptions.length);
    password = password + passwordOptions[randomInput];
  }

  return password

}


 // Assignment Code
 var generateBtn = document.querySelector("#generate");

 // Write password to the #password input
 function writePassword() {

  //Pop up boxes will appear when the "Generate Password" button is clicked
  var completePopUps = popUps();

  if(completePopUps) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password; 
  } 

 }
 
 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);