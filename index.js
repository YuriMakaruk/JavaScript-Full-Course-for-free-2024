function generatePassword() {
  const length = document.getElementById("textbox").value;
  const upperCase = document.getElementById("UpperCaseCharacters").checked;
  const lowerCase = document.getElementById("LowerCaseCharacters").checked;
  const numbers = document.getElementById("numberCharacters").checked;
  const symbols = document.getElementById("symbolCharacters").checked;

  let characters = "";
  if (upperCase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowerCase) characters += "abcdefghijklmnopqrstuvwxyz";
  if (numbers) characters += "0123456789";
  if (symbols) characters += "!@#$%^&*()_+[]{}|;:,.<>?";

  if (characters.length === 0) {
    document.getElementById("result").textContent =
      "Select at least one character type";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  document.getElementById("result").textContent = password;
}
