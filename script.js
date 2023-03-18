var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var integers = "0123456789";
var specials = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var generatedPasswordString = "";

var generateBtn = document.querySelector("#generate");



function passwordGenerator() {
  var charNos = window.prompt(
    "Enter the length of the password you want (8 to 128 characters only)"
  );
  var isLowerCase = window.prompt("Enter 'yes' if you want to include LOWERCASE letters as well");
  var isUpperCase = window.prompt("Enter 'yes' if you want to include UPPERCASE letters as well");
  var isNumeric = window.prompt("Enter 'yes' if you want to include NUMERIC letters as well");
  var isSpecialChars = window.prompt("Enter 'yes' if you want to include Special chars letters as well");

  

  if(charNos>8||charNos<128 || isLowerCase || isUpperCase || isNumeric || isSpecialChars){
    



  }
}

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var password = passwordGenerator();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);