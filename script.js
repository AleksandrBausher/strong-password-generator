var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var integers = "0123456789";
var specials = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

var generateBtn = document.querySelector("#generate");

function passwordGenerator() {
  //string to store password
  var generatedPasswordString = "";
  // prompting user to make selections for everything
  var charNos = window.prompt(
    "Enter the length of the password you want (8 to 128 characters only)"
  );
  var isLowerCase = window.prompt(
    "Enter 'yes' if you want to include LOWERCASE letters as well"
  );
  var isUpperCase = window.prompt(
    "Enter 'yes' if you want to include UPPERCASE letters as well"
  );
  var isNumeric = window.prompt(
    "Enter 'yes' if you want to include NUMERIC letters as well"
  );
  var isSpecialChars = window.prompt(
    "Enter 'yes' if you want to include Special chars letters as well"
  );
//adding selected choice in a string
  var passwordFromChars = "";
  if (
    charNos > 8 ||
    charNos < 128 ||
    isLowerCase == "yes" ||
    isUpperCase == "yes" ||
    isNumeric == "yes" ||
    isSpecialChars == "yes"
  ) {
    if (isLowerCase == "yes") {
      passwordFromChars += lowerCase;
    }
    if (isUpperCase == "yes") {
      passwordFromChars += upperCases;
    }
    if (isNumeric == "yes") {
      passwordFromChars += integers;
    }
    if (isSpecialChars == "yes") {
      passwordFromChars += specials;
    }

    //generating randowm letters from random lib
    for (var i = 0; i < charNos; i++) {
      generatedPasswordString += passwordFromChars.charAt(
        Math.floor(Math.random() * passwordFromChars.length)
      );
    }

    console.log(generatedPasswordString);
  }

  return generatedPasswordString;
}

// Write password to the #password input
function writePassword() {
  var password = passwordGenerator();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);