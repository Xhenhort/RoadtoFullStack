let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const getAbsoluteDistance = (number, target) => {
  return Math.abs(number - target);
};

const compareGuesses = (userGuess, computerGuess, secretTarget) => {
  const userGuessDiffrence = getAbsoluteDistance(userGuess, secretTarget);
  const computerGuessDiffrence = getAbsoluteDistance(
    computerGuess,
    secretTarget
  );
  if (userGuessDiffrence > 9) {
    alert("You must choose a number from 0 - 9");
  } else if (userGuessDiffrence <= computerGuessDiffrence) {
    return true;
  } else if (computerGuessDiffrence < userGuessDiffrence) {
    return false;
  }
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};

console.log(generateTarget());
console.log(compareGuesses(5, 5, 5));
console.log(humanScore);
console.log(currentRoundNumber);
