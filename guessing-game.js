const secretNumber = 5;

let checkGuess = function (number) {
  if (checkGuess > secretNumber) {
    console.log("Too high");
    return false;
  } else if (checkGuess < secretNumber) {
    console.log("Too low");
    return false;
  } else {
    console.log("Correct!");
    return true;
  }
};
