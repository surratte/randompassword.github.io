var specialCharacters = "!@#$%^&*()_+"
var upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCases = "abcdefghijklmnopqrstuvwxyz"
var generateBtn = document.querySelector("#generate");
const generateButton = document.getElementById('generateBtn')

// Write password to the #password input
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    passwordText.value = password}


// Prompts that come up after you click generate password
  var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 12 but less than 128.");

  var numbers = confirm("Do you want numbers in your password?");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var confirmspecialCharacters = confirm("do you want special characters?");

  var confirmNumbers = confirm("do you want numbers?");

var minimumCount = '8'

var maximumCount ='128'

var functionArray = {
  getNumbers: function() {
    return String.fromCharCode(Math.floor(Math.random() * ((maximumCount - minimumCount) + 1)));
  },

  getLowerCases: function() {
    return String.fromCharCode(Math.floor(Math.random() * ((maximumCount - minimumCount) + 1)));
  },

  getUpperCases: function() {
    return String.fromCharCode(Math.floor(Math.random() * ((maximumCount - minimumCount) + 1)));
  },

  getSpecialCharacters: function() {
    return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
  }
}
  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;

  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;

  }

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;

  }

  if (specialCharacters === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;

  }
  var randomPasswordGenerated = "";

  for (var i = 0; i < (parseInt(passwordLength) - minimumCount + maximumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

randomPasswordGenerated += randomNumberPicked;

}
randomPasswordGenerated += numbers;
  randomPasswordGenerated += lowerCases;
  randomPasswordGenerated += upperCases;
  randomPasswordGenerated += specialCharacters;

generateBtn.addEventListener("click", writePassword);