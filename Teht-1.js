// Tarkistaa onko sana palindromi
function PalindromeChecker(word) {
  let reversed = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }

  if (reversed === word) {
    return true;
  } else {
    return false;
  }
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Anna sana: ", (answer) => {
  let word = answer;

  if (PalindromeChecker(word)) {
    console.log("Sana on palindromi.");
  } else {
    console.log("Sana ei ole palindromi.");
  }

  rl.close();
});
