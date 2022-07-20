function randomInt(max) {
  return Math.floor(Math.random() * (max));
}

function computerPlay() {
  const num = randomInt(3);
  switch (num) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default:
      return "Computer selection error.";
      break;
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return 0;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return -1;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return 1;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return 1;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return -1;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return -1;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return 1;
  } else {
    return "--error--";
  }
}

function gameRound() {
  let playerSelection = this.className, computerSelection = computerPlay();
  let result = playRound(playerSelection, computerSelection);
  finalScore += result;
  let textResult = ""
  switch (result) {
    case 1:
      textResult = "You won this round!";
      break;
    case -1:
      textResult = "You lost this round.";
      break;
    case 0:
      textResult = "Tie.";
      break;
  }
  results.textContent = `Result: You chose ${playerSelection} and the computer chose ${computerSelection}. ${textResult}`;
  score.textContent = `Score: ${finalScore}`;
  if (finalScore === 5 || finalScore === -5) {
    if (finalScore === 5) {
      results.textContent = 'You win the game!';
    } else if (finalScore === -5) {
      results.textContent = 'You lost the game.';
    }
    finalScore = 0;
  }
}

let finalScore = 0;
const rock = document.querySelector('.rock'),
  paper = document.querySelector('.paper'),
  scissors = document.querySelector('.scissors'),
  results = document.querySelector('.results'),
  score = document.querySelector('.score');

rock.addEventListener('click', gameRound);
paper.addEventListener('click', gameRound);
scissors.addEventListener('click', gameRound);