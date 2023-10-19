// 1) getComputerChoice will randomly return rock, paper, or scissors
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice;

    if (randomNum == 0) {
        return "rock";
    } else if (randomNum == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionLower = playerSelection.toLowerCase()
    if (playerSelectionLower === computerSelection) {
        return "It's a draw!"
    } else if (playerSelectionLower === "rock") {
        if (computerSelection === "paper") {
            return "You lose! Paper beats Rock"
        } else {
            return "You win! Rock beats Scissors"
        }
    } else if (playerSelectionLower === "paper") {
        if (computerSelection === "scissors") {
            return "You lose! Scissors beats paper"
        } else {
            return "You win! Paper beats Rock"
        }
    } else if (playerSelectionLower === "scissors") {
        if (computerSelection === "rock") {
            return "You lose! Rock beats Scissors"
        } else {
            return "You win! Scissors beats Rock"
        }
    }
}
const playerSelection = 'paper';
const computerSelection = getComputerChoice()
console.log("player selection: " + playerSelection)
console.log("computerSelection: " + computerSelection)
console.log(playRound(playerSelection, computerSelection))
