let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomChoice = Math.ceil(Math.random() * 3);

  if (randomChoice === 1) {
    return "rock";
  }
  if (randomChoice === 2) {
    return "paper";
  }
  if (randomChoice === 3) {
    return "scissors";
  }
}

function getHumanChoice() {
  let userChoice = prompt("Please choose between rock, paper, scissors ");
  userChoice = userChoice.toLowerCase();
  if (userChoice === "rock") {
    return "rock";
  }
  if (userChoice === "paper") {
    return "paper";
  }
  if (userChoice === "scissors") {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You Win! Rock beats Scissors!");
    ++humanScore;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You Win! Paper beats Rock!");
    ++humanScore;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You Win! Scissors beat Paper!");
    ++humanScore;
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log("You Lose! Rock beats Scissors!");
    ++computerScore;
    console.log(computerScore);
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("You Lose! Paper beats Rock!");
    ++computerScore;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
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
