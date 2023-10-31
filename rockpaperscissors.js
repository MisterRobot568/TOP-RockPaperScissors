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
    console.log("Player Chooses: " + playerSelection);
    console.log("Computer Chooses: " + computerSelection);
    if (playerSelectionLower === computerSelection) {
        div.textContent = ("It's a draw!");
        return 2;
    } else if (playerSelectionLower === "rock") {
        if (computerSelection === "paper") {
            div.textContent = ("You lose! Paper beats Rock");
            return 0;
        } else {
            div.textContent = ("You win! Rock beats Scissors");
            return 1;
        }
    } else if (playerSelectionLower === "paper") {
        if (computerSelection === "scissors") {
            div.textContent = ("You lose! Scissors beats paper")
            return 0;
        } else {
            div.textContent = ("You win! Paper beats Rock")
            return 1;
        }
    } else if (playerSelectionLower === "scissors") {
        if (computerSelection === "rock") {
            div.textContent = ("You lose! Rock beats Scissors")
            return 0;
        } else {
            div.textContent = ("You win! Scissors beats paper")
            return 1;
        }
    }
}

// 1 prompt user to give their input 
// use playRound to compare user input to computer input
// Add to score based on the outcome of playRound

// function disableButtons() {
//     buttons.forEach(elem => {
//         elem.disabled = true
//     })
// }

function game() {
    // function to disable the buttons
    function disableButtons() {
        buttons.forEach(elem => {
            elem.disabled = true
        })
    }

    let playerScore = 0;
    let compScore = 0;
    const score = document.querySelector('.score');
    const show_winner = document.querySelector(".winner");
    // score.textContent = ("Player: ")//+ playerScore + " PC: " + compScore;

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
    // while (playerScore < 5 & compScore < 5) {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            let round = playRound(button.id, getComputerChoice())
            // alert("clicked: " + button.id)

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
