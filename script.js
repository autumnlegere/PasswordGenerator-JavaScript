//Arrays for password length lowercase letters, uppercase letters, numbers, and symbols.
var choiceArr = [];
var howLong = 8;
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = lower.map(element => {
  return element.toUpperCase();
});
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "#", "$", "%", "$", "'", "(", ")", "*", "+", "-", ",", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "~"]

//Functions for generating random elements from each array listed above
function randomLower(lower) {
  return lower[Math.floor(Math.random()*lower.length)];
}

function randomUpper(upper) {
  return upper[Math.floor(Math.random()*upper.length)];
}

function randomNumber(number) {
  return number[Math.floor(Math.random()*number.length)];
}

function randomSymbol(symbol) {
  return symbol[Math.floor(Math.random()*symbol.length)];
}


function popUps() {
  howLong = parseInt(prompt("How many characters long would you like your password to be?\n(Must be between 8 and 128)"));
  if(NaN(howLong || howLong <8 || howLong > 128)) {
    alert("Password length must be a number between 8 and 128. Please try again.");
    return false
  }

  if (confirm("Select 'OK' if you would like to include lowercase letters in your password.")) {
    choiceArr = choiceArr.concat(lower);
  }

  if (confirm("Select 'OK' if you would like to include uppercase letters in your password.")) {
    choiceArr = choiceArr.concat(upper);
  }

  if (confirm("Select 'OK' if you would like to include numbers in your password.")) {
    choiceArr = choiceArr.concat(number)
  }

  if (confirm("Select 'OK' if you would like to include symbols in your password.")) {
    choiceArr = choiceArr.concat(symbol)
  }

}

function generatePassword () {
  //var selectLength = prompt("How many characters would you like your password to be?\n(Must be between 8 and 128)")

}

//console.log(selectLength)
console.log(selectLower)
console.log(selectUpper)
console.log(selectNumber)
console.log(selectSymbol)



 // Assignment Code
 var generateBtn = document.querySelector("#generate");

 // Write password to the #password input
 function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");
 
   passwordText.value = password;

 }
 
 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
