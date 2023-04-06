// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    // ask the user for length
  let passwordLength = parseInt(prompt("How long should the password be?"));
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Error, invalid password length. \nPlease choose a password greater than 8 and less than 128 characters.");
    return"";
  }
  
  // ask the user for which characters to include
var includeLowercase = confirm("Include lowercase letters in password?");
var includeUppercase = confirm("Include uppercase letters in password?");
var includeNumbers = confirm("Include numbers in password?");
var includeSpecialCharacters = confirm("Include special characters in password?");
// validate types of characters
if (!includeLowercase && !includeUpperCase && !includeNumbers && !includeSpecialCharacters) {
    alert("Error, invalid character types. \nPlease include at least one type of character.");
    return"";
}


// generate a random password
let passwordCharacters = [];
const specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz"
const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbersCharacters = "1234567890"


if (includeSpecialCharacters) {
    passwordCharacters = passwordCharacters.concat(specialCharacters.split(""));
}
if (includeLowercase) {
    passwordCharacters = passwordCharacters.concat(lowercaseCharacters.split(""));
}
if (includeUppercase) {
    passwordCharacters = passwordCharacters.concat(uppercaseCharacters.split(""));
}
if (includeNumbers) {
    passwordCharacters = passwordCharacters.concat(numbersCharacters.split(""));
}


console.log(passwordCharacters)
let results = "";
for (var i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * passwordCharacters.length);
    
    let randomCharacter = passwordCharacters[randomIndex];
    results += randomCharacter;
}
// return generated password
console.log(results); 
return results
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password) 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
