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

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "Rock" && computerChoice === "Scissors") {
    console.log("You Win! Rock beats Scissors!");
    ++humanScore;
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    console.log("You Win! Paper beats Rock!");
    ++humanScore;
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    console.log("You Win! Scissors beat Paper!");
    ++humanScore;
  } else if (computerChoice === "Rock" && humanChoice === "Scissors") {
    console.log("You Lose! Rock beats Scissors!");
    ++computerScore;
    console.log(computerScore);
  } else if (computerChoice === "Paper" && humanChoice === "Rock") {
    console.log("You Lose! Paper beats Rock!");
    ++computerScore;
  } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
    console.log("You Lose! Scissors beat Paper!");
    ++computerScore;
  } else if (computerChoice === humanChoice || humanChoice === computerChoice) {
    console.log("It's a draw!!");
    ++computerScore;
    ++humanScore;
  } else {
    console.log("Wrong Input");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
