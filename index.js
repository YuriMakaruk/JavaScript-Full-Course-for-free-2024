const textbox = document.getElementById("textbox");
const includeLowercase = document.getElementById("lowerCaseCharacters");
const includeUppercase = document.getElementById("upperCaseCharacters");
const includeNumbers = document.getElementById("numberCharacters");
const includeSymbols = document.getElementById("symbolCharacters");
const result = document.getElementById("result");

// function generatePassword(
//   passwordLength,
//   includeLowercase,
//   includeUppercase,
//   includeNumbers,
//   includeSymbols
// ) {
//   const lowecasechars = "abcdefghijklmnopqrstuvwxyz";
//   const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const numberChars = "0123456789";
//   const symbolChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

//   let allowedChars = "";
//   let password = "";

//   allowedChars += includeLowercase ? lowecasechars : "";
//   allowedChars += includeUppercase ? uppercasechars : "";
//   allowedChars += includeNumbers ? numberChars : "";
//   allowedChars += includeSymbols ? symbolChars : "";

//   if (passwordLength <= 0) {
//     return `password length must be at lease 1`;
//   }
//   if (allowedChars.length === 0) {
//     return `select at least one set of characters`;
//   }
//   for (let i = 0; i < passwordLength; i++) {
//     const random = Math.floor(Math.random() * allowedChars.length);
//     password += allowedChars[random];
//   }

//   return password;
// }

function generatePassword() {
  if (includeLowercase.checked) {
    result.textContent = "includeLowercase is checked";
  } else if (includeUppercase.checked) {
    result.textContent = "includeUppercase is checked";
  } else {
    result.textContent = "select smth";
  }
}
// const passwordLength = 12;
// const includeLowercase = false;
// const includeUppercase = false;
// const includeNumbers = true;
// const includeSymbols = false;

// const password = generatePassword(
//   passwordLength,
//   includeLowercase,
//   includeUppercase,
//   includeNumbers,
//   includeSymbols
// );

// console.log(`Generated password: ${password}`);
