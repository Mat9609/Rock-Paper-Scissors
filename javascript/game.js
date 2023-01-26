function getComputerChoice() {
  choice = Math.floor(Math.random() * 3 + 1);
  switch (choice) {
    case 1:
      console.log("Rock");
      break;
    case 2:
      console.log("Paper");
      break;
    case 3:
      console.log("Scissors");
      break;
  }
  return choice;
}

function simRound(computerChoice, playerChoice) {
  playerChoice = playerChoice.toUpperCase();
  console.log(playerChoice);
  if (playerChoice == "ROCK") {
    playerChoice = 1;
  }
  else if (playerChoice == "PAPER") {
    playerChoice = 2;
  }
  else if (playerChoice == "SCISSORS") {
    playerChoice = 3;
  }
  else return;

  if (
    (computerChoice == 1 && playerChoice == 1) ||
    (computerChoice == 2 && playerChoice == 2) ||
    (computerChoice == 3 && playerChoice == 3)
  ) {
    return "Draw";
  }
  if (computerChoice == 1 && playerChoice == 2) {
    playerPoints += 1;
    return "Player Wins!";
  }
  if (computerChoice == 1 && playerChoice == 3) {
    computerPoints += 1;
    return "Computer Wins!";
  }
  if (computerChoice == 2 && playerChoice == 3) {
    playerPoints += 1;
    return "Player Wins!";
  }
  if (computerChoice == 2 && playerChoice == 1) {
    computerPoints += 1;
    return "Computer Wins!";
  }
  if (computerChoice == 3 && playerChoice == 1) {
    playerPoints += 1;
    return "Player Wins!";
  }
  if (computerChoice == 3 && playerChoice == 2) {
    computerPoints += 1;
    return "Computer Wins!";
  }
}

function checkWinner() {
  if (playerPoints > computerPoints) {
    console.log("Mecz wygral gracz!");
  } else if (playerPoints == computerPoints) {
    console.log("Remis!");
  } else {
    console.log("Mecz wygral komputer!");
  }
  console.log(`Wynik to ${playerPoints} do ${computerPoints}`);
}

let playerPoints = 0;
let computerPoints = 0;

function playGame() {
  let computerChoice = getComputerChoice();
  let playerChoice = prompt("Co wybierasz?");
  console.log(simRound(computerChoice, playerChoice));
  console.log(playerPoints);
  checkWinner();
}

playGame();
