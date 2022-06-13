const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let secretNumber;

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
  rl.question("Enter a guess: ", answer => {
    let check = checkGuess(Number(answer));

    if (check === true) {
      rl.close();
    } else {
      askGuess();
    }
  });
};

let randomInRange = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let askRange = function () {
  let minimum;
  let maximum;

  rl.question("Enter a min number: ", min => {
    minimum = Number(min);

    rl.question("Enter a max number: ", max => {
      maximum = Number(max);
      console.log(`I'm thinking of a number between ${minimum} and ${maximum}...`);
      secretNumber = randomInRange(minimum, maximum);
      askGuess();
    });
  });
};

askRange();
