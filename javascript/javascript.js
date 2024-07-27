let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomChoice = Math.ceil(Math.random() * 3);

  if (randomChoice === 1) {
    return "Rock";
  }
  if (randomChoice === 2) {
    return "Paper";
  }
  if (randomChoice === 3) {
    return "Scissors";
  }
}

function getHumanChoice() {
  let userChoice = prompt("Please choose between Rock, Paper, Scissors ");

  if (userChoice === "Rock") {
    return "Rock";
  }
  if (userChoice === "Paper") {
    return "Paper";
  }
  if (userChoice === "Scissors") {
    return "Scissors";
  }
}
