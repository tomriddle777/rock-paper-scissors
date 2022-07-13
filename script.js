function randomInt(max) {
  return Math.floor(Math.random() * (max));
}

function computerPlay() {
  const num = randomInt(3);
  switch (num) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissors";
      break;
  }
}

function playRound (playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "Draw.";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose.";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win.";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win.";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose.";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose.";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win.";
  }
}