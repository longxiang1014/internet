const randomNumber = Math.floor(Math.random() * 100) + 1;
const guessInput = document.getElementById('guessInput');
const message = document.getElementById('message');

function checkGuess() {
  const userGuess = parseInt(guessInput.value);
  if (userGuess === randomNumber) {
    message.textContent = `恭喜! 你猜到正確數字: ${randomNumber}`;
  } else if (userGuess < randomNumber) {
    message.textContent = `抱歉這數字大於${userGuess}再試一次!`;
  } else {
    message.textContent = `抱歉這數字小於${userGuess}再試一次!`;
  }
  guessInput.value = '';
}
