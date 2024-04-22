function checkGuess() {
  let randomNumber = Math.floor((Math.random() * 6) + 1);
  let userGuess = parseInt(document.getElementById("userGuess").value);

  document.getElementById("guess").textContent = "User Guess: " + userGuess;
  document.getElementById("answer").textContent = "Computer generated number: " + randomNumber;

  if (userGuess == randomNumber) {
    document.getElementById("result").textContent = "Congratulations! You guessed the correct number!";
  }
}