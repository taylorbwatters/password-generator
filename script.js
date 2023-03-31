const generateBtn = document.getElementById("generate");

const randomPassword = document.getElementById("password");

const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const numericCharacters = "0123456789";
const specialCharacters = "$&+,:;=?@#|'<>.-^*()%!";

function generateRandomPassword() {

  let newPassword = "";

  const passwordLength = parseInt(window.prompt("Specify password length"));

  if (passwordLength < 8 || passwordLength > 128) {
    const shouldTryAgain = window.confirm(
      "Password needs to be between 8 and 128 characters. Would you like to try again?"
    );

    if (shouldTryAgain) return generateRandomPassword();
  }

  const shouldIncludeLowercase = window.confirm("Should we include lowercase characters?");
  const shouldIncludeUppercase = window.confirm("Should we include uppercase characters?");
  const shouldIncludeNumeric = window.confirm("Should we include numeric characters?");
  const shouldIncludeSpecial = window.confirm("Should we include special characters?");

  let charactersToPickFrom = "";

  if (shouldIncludeUppercase) charactersToPickFrom += uppercaseCharacters;
  if (shouldIncludeLowercase) charactersToPickFrom += lowercaseCharacters;
  if (shouldIncludeNumeric) charactersToPickFrom += numericCharacters;
  if (shouldIncludeSpecial) charactersToPickFrom += specialCharacters;

  for (let i = 0; i < passwordLength; i++) {
    const char = charactersToPickFrom[Math.floor(Math.random() * charactersToPickFrom.length)];

    newPassword += char;
  }

  randomPassword.textContent = newPassword;
}

generateBtn.addEventListener("click", generateRandomPassword);





