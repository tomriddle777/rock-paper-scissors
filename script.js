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

function game() {
  finalResult = 0;
  for (let i = 0; i < 5; i++) {
    let playerChoice = prompt(`Round ${i + 1}\nChoice: `);
    let computerChoice = computerPlay();
    console.log(`Round ${i + 1}:\nYou chose ${playerChoice} and the computer chose ${computerChoice}.`);
    result = playRound(playerChoice, computerChoice);
    finalResult += result;
    switch (result) {
      case 0:
        console.log("Draw.");
        break;
      case 1:
        console.log("You win!");
        break;
      case -1:
        console.log("You lose.");
        break;
      default:
        console.log("Round error.");
        break;
    }
    console.log(`Points: ${finalResult}.`);
  }
  console.log("Final result: ");
  if (finalResult > 0) {
    return "You won the game!";
  } else if (finalResult < 0) {
    return "You lost the game.";
  } else if (finalResult === 0) {
    return "The game is tied.";
  } else {
    return "Error.";
  }
}

console.log(game());