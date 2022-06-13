const secretNumber = 5;
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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

let askGuess = function () {
  rl.question("Enter a guess: ", (answer) => {
    let check = checkGuess(Number(answer));

    if (check === true) {
      rl.close();
    } else {
      askGuess();
    }
  });
};

askGuess();
