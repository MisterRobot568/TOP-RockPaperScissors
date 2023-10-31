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

    const div = document.querySelector('.results')
    let playerSelectionLower = playerSelection.toLowerCase()
    // console.log("Player Chooses: " + playerSelection);
    // console.log("Computer Chooses: " + computerSelection);
    if (playerSelectionLower === computerSelection) {
        div.textContent = ("It's a draw!");
        return 2;
    } else if (playerSelectionLower === "rock") {
        if (computerSelection === "paper") {
            div.textContent = ("You lose! Austin beats Slime");
            return 0;
        } else {
            div.textContent = ("You win! Slime beats Anya");
            return 1;
        }
    } else if (playerSelectionLower === "paper") {
        if (computerSelection === "scissors") {
            div.textContent = ("You lose! Anya beats Austin")
            return 0;
        } else {
            div.textContent = ("You win! Austin beats Slime")
            return 1;
        }
    } else if (playerSelectionLower === "scissors") {
        if (computerSelection === "rock") {
            div.textContent = ("You lose! Slime beats Anya")
            return 0;
        } else {
            div.textContent = ("You win! Anya beats Austin")
            return 1;
        }
    }
}

// 1 prompt user to give their input 
// use playRound to compare user input to computer input
// Add to score based on the outcome of playRound


function game() {

    // function to disable the buttons
    function disableButtons() {
        buttons.forEach(elem => {
            elem.disabled = true
        })
    }

    let playerScore = 0;
    let compScore = 0;

    const score = document.querySelector('.score'); //reference to show current score
    const show_winner = document.querySelector(".winner"); // reference to show winner at the end
    const buttons = document.querySelectorAll('button'); // reference to buttons

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            let round = playRound(button.id, getComputerChoice())

            if (round == 0) {
                compScore++;
            } else if (round == 1) {
                playerScore++;
            }
            score.textContent = ("Player: " + playerScore + " PC: " + compScore);

            // Check for a winner
            if (playerScore >= 5 || compScore >= 5) {
                disableButtons()
                if (playerScore == compScore) {
                    show_winner.textContent = "It was a tie! Refresh page to play again"
                } else if (playerScore > compScore) {
                    show_winner.textContent = "You win! Refresh Page to play again"

                } else {
                    show_winner.textContent = "Computer Wins ):! Refresh page to play again"

                }
            }
        });

    });


}

// add event listener to the r/p/s buttons


game();
