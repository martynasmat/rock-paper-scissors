function computerPlay() {
    // randomly returns either rock, paper or scissors
    let options = ['Rock', 'Paper', 'Scissors'];
    return options[Math.floor((Math.random() * 3))];
}

function game() {

    function playRound(playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection == "rock") {
            if (computerSelection == "Rock") {
                console.log(`It's a draw! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} ties ${computerSelection}`);
                return 2;
            } else if (computerSelection == "Paper") {
                console.log(`You Lose! ${computerSelection} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`);
                return 0;
            } else if (computerSelection == "Scissors") {
                console.log(`You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`);
                return 1;
            };
        }else if (playerSelection == "paper") {
            if (computerSelection == "Paper") {
                console.log(`It's a draw! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} ties ${computerSelection}`);
                return 2;
            } else if (computerSelection == "Rock") {
                console.log(`You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`);
                return 1;
            } else if (computerSelection == "Scissors") {
                console.log(`You Lose! ${computerSelection} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`);
                return 0;
            };
        }else if (playerSelection == "scissors") {
            if (computerSelection == "Scissors") {
                console.log(`It's a draw! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} ties ${computerSelection}`);
                return 2;
            } else if (computerSelection == "Rock") {
                console.log(`You Lose! ${computerSelection} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`);
                return 0;
            } else if (computerSelection == "Scissors") {
                console.log(`You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`);
                return 1;
            };
        }else {
            return "Incorrect input, try again."
        };
    };

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Your turn!");
        const computerSelection = computerPlay();
        let outcome = playRound(playerSelection, computerSelection);
        if (outcome == 1) {
            playerScore++;
        } else if (outcome == 2) {
            computerScore++;
            playerScore++;
        } else if (outcome == 0) {
            computerScore++;
        };
        console.log(`Your score: ${playerScore} | Computer's score: ${computerScore}`);
    };

    if (playerScore > computerScore) {
        console.log(`Congratulations, you win! Your final score: ${playerScore} | Computer's final score: ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You lost... Better luck next time! Your final score: ${playerScore} | Computer's final score: ${computerScore}`);
    } else {
        console.log(`It's a tie! Your final score: ${playerScore} | Computer's final score: ${computerScore}`);
    }

}

game();