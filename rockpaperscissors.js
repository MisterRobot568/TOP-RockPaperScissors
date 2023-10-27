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
    console.log("Player Chooses: " + playerSelection);
    console.log("Computer Chooses: " + computerSelection);
    if (playerSelectionLower === computerSelection) {
        console.log("It's a draw!");
        return 2;
    } else if (playerSelectionLower === "rock") {
        if (computerSelection === "paper") {
            console.log("You lose! Paper beats Rock");
            return 0;
        } else {
            console.log("You win! Rock beats Scissors");
            return 1;
        }
    } else if (playerSelectionLower === "paper") {
        if (computerSelection === "scissors") {
            console.log("You lose! Scissors beats paper")
            return 0;
        } else {
            console.log("You win! Paper beats Rock")
            return 1;
        }
    } else if (playerSelectionLower === "scissors") {
        if (computerSelection === "rock") {
            console.log("You lose! Rock beats Scissors")
            return 0;
        } else {
            console.log("You win! Scissors beats paper")
            return 1;
        }
    }
}

// 1 prompt user to give their input 
// use playRound to compare user input to computer input
// Add to score based on the outcome of playRound

function game() {


    let playerScore = 0;
    let compScore = 0;

    // const rock_btn = document.querySelector('#rock_btn');
    // const paper_btn = document.querySelector('#paper_btn');
    // const scissors_btn = document.querySelector('#scissors_btn');

    // rock_btn.addEventListener('click', () => {
    //     alert(playRound("rock", getComputerChoice()))
    // })
    // paper_btn.addEventListener('click', () => {
    //     alert("Paper!")
    // })
    // scissors_btn.addEventListener('click', () => {
    //     alert("Paper!")
    // })

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            // alert(playRound(button.id, getComputerChoice()))
            alert("clicked: " + button.id)
        });
    });





    // for (let i = 0; i < 5; i++) {
    //     let playerSelection = prompt("Choose: Rock, Paper, or scissors!")
    //     let round = playRound(playerSelection, getComputerChoice())
    //     if (round == 0) {
    //         compScore++;
    //     } else if (round == 1) {
    //         playerScore++;
    //     }
    // }
    // console.log("Final score: Player : " + playerScore + ", Computer : " + compScore)
}

// add event listener to the r/p/s buttons


game();
