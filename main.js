let Phrase = require("felipeparreira-palindrome");

function palindromeTester(event) {
  event.preventDefault();
  let phrase = new Phrase(event.target.phrase.value);
  let palindromeResult = document.querySelector("#palindromeResult");

  if (phrase.palindrome()) {
    palindromeResult.innerHTML = `"<span style="font-weight: bold;">${phrase.content}</span>" is a palindrome!`;
  } else {
    palindromeResult.innerHTML = `"<span style="font-weight: bold;">${phrase.content}</span>" is a not a palindrome.`;
  }

  event.target.phrase.value = '';
}

document.addEventListener("DOMContentLoaded", function() {
  let button = document.querySelector("#palindromeTester");
  button.addEventListener("submit", function() {
    palindromeTester(event);
  });
});
