const secretNumber = 5;

let checkGuess = function (guess) {
  if (guess > secretNumber) {
    console.log("Too high");
    return false;
  } else if (guess < secretNumber) {
    console.log("Too low");
    return false;
  } else {
    console.log("Correct!");
    return true;
  }
};
