function computerPlay() {
    // randomly returns either rock, paper or scissors
    let options = ['Rock', 'Paper', 'Scissors'];
    return options[Math.floor((Math.random() * 3))]; 
}

function playRound(playerSelection, computerSelection) {
    const runningScore = document.querySelector('.running-score');
    if (playerSelection == "rock" && computerSelection == "Scissors" ||
            playerSelection == "paper" && computerSelection == "Rock" ||
            playerSelection == "scissors" && computerSelection == "Paper") {
        runningScore.textContent = `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`;
        return 1;
    }else if (playerSelection == "rock" && computerSelection == "Paper" ||
            playerSelection == "paper" && computerSelection == "Scissors" ||
            playerSelection == "scissors" && computerSelection == "Rock") {
        runningScore.textContent = `You Lose! ${computerSelection} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
        return 0;
    }else if (playerSelection == computerSelection.toLowerCase()) {
        runningScore.textContent = `It's a draw! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} ties ${computerSelection}`;
        return 2;
    };
}

function calculateScore(outcome) {
    if (outcome == 1) {
        playerScore++;
    } else if (outcome == 2) {
        computerScore++;
        playerScore++;
    } else if (outcome == 0) {
        computerScore++;
    };
}

function checkScore() {
    if (playerScore > computerScore) {
        finalScore.textContent = `Congratulations, you win! Your final score: ${playerScore} | Computer's final score: ${computerScore}`;
    } else if (computerScore > playerScore) {
        finalScore.textContent = `You lost... Better luck next time! Your final score: ${playerScore} | Computer's final score: ${computerScore}`;
    } else {
        finalScore.textContent = `It's a tie! Your final score: ${playerScore} | Computer's final score: ${computerScore}`;
    };
}

function onClick(button) {
    if(button.currentTarget.classList.contains('rock')) {
        playerSelection = 'rock';
    }else if(button.currentTarget.classList.contains('paper')) {
        playerSelection = 'paper';
    }else if(button.currentTarget.classList.contains('scissors')) {
        playerSelection = 'scissors';
    };
    const computerSelection = computerPlay();
    calculateScore(playRound(playerSelection, computerSelection), playerScore, computerScore);
    finalScore.textContent = `Your score: ${playerScore} | Computer's score: ${computerScore}`;
    if(playerScore >= 5 || computerScore >= 5){
        checkScore(playerScore, computerScore);
        buttons.forEach((button) => button.removeEventListener('click', onClick));
    };
}

function game() {
    buttons.forEach((button) => button.addEventListener('click', onClick));
}

let playerScore = 0;
let computerScore = 0;
let playerSelection = '';
const buttons = document.querySelectorAll('button');
const finalScore = document.querySelector('.final-score');
finalScore.textContent = `Your score: ${playerScore} | Computer's score: ${computerScore}`;
game();