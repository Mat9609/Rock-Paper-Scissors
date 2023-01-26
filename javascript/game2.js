function getComputerChoice() {
  return (choice = Math.floor(Math.random() * 3 + 1));
}

function playGame(playerChoice) {
  let computerChoice = getComputerChoice();
  let result = simRound(computerChoice, Number(playerChoice));
  let playerChoiceText = "";
  if (playerChoice == 1) {
    playerChoiceText = "ROCK";
  } else if (playerChoice == 2) {
    playerChoiceText = "PAPER";
  } else if (playerChoice == 3) {
    playerChoiceText = "SCISSORS";
  }
  let computerChoiceText = "";
  if (computerChoice == 1) {
    computerChoiceText = "ROCK";
  } else if (computerChoice == 2) {
    computerChoiceText = "PAPER";
  } else if (computerChoice == 3) {
    computerChoiceText = "SCISSORS";
  }

  document.getElementById("playerChoice").innerText = playerChoiceText;
  document.getElementById("computerChoice").innerText = computerChoiceText;
  document.getElementById("result").innerText = result;
  document.getElementById("playerPoints").innerText = playerPoints;
  document.getElementById("computerPoints").innerText = computerPoints;
  document.getElementById("duelResult").innerText = checkIf5Points();
}

function simRound(computerChoice, playerChoice) {
  if (
    (computerChoice == 1 && playerChoice == 1) ||
    (computerChoice == 2 && playerChoice == 2) ||
    (computerChoice == 3 && playerChoice == 3)
  ) {
    return "Draw In This Round";
  }
  if (computerChoice == 1 && playerChoice == 2) {
    playerPoints += 1;
    return "Player Wins This Round!";
  }
  if (computerChoice == 1 && playerChoice == 3) {
    computerPoints += 1;
    return "Computer Wins This Round!";
  }
  if (computerChoice == 2 && playerChoice == 3) {
    playerPoints += 1;
    return "Player Wins This Round!";
  }
  if (computerChoice == 2 && playerChoice == 1) {
    computerPoints += 1;
    return "Computer Wins This Round!";
  }
  if (computerChoice == 3 && playerChoice == 1) {
    playerPoints += 1;
    return "Player Wins This Round!";
  }
  if (computerChoice == 3 && playerChoice == 2) {
    computerPoints += 1;
    return "Computer Wins This Round!";
  }
}

function checkIf5Points() {
  if (playerPoints >= 5) {
    playerPoints = 0;
    computerPoints = 0;
    let audioWin = document.getElementById(`winAudio`);
    audioWin.play();
    return "Player Wins This Duel!";
  } else if (computerPoints >= 5) {
    playerPoints = 0;
    computerPoints = 0;
    let audioWin = document.getElementById(`loseAudio`);
    audioLose.play();
    return "Computer Wins This Duel!";
  } else {
    return "Duel Continues!";
  }
}

let playerPoints = 0;
let computerPoints = 0;

document.querySelectorAll(".imageGame").forEach((image) => {
  image.addEventListener("click", (event) => {
    playGame(image.name);
    let audio = document.getElementById(`${image.name}Audio`);
    audio.play();
  });
});
