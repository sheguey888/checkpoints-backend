import generatePassword from "generate-password";

function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 12, 
    numbers: true, 
    symbols: true, 
    uppercase: true, 
    excludeSimilarCharacters: true, 
  });

  console.log("the generated password is:", password);
}

generateRandomPassword();
