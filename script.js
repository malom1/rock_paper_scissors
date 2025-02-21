//Set two integer variables to keep track of computer and user score.

let humanScore = 0;
let computerScore = 0;
const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const body = document.querySelector("body");

//Generates a random number between 1-10 and chooses an option of rock, paper, or scissor
//based on the number range.
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() *choices.length)];
}

//This function represents one round and increments scores accordingly.
function playRound(humanChoice, computerChoice){

    let round = 0;
    const announce = document.createElement("div");

    //Base case to see if it is a tie. No points incremented for either player.
    if (humanChoice===computerChoice){
        announce.textContent = `It's a tie! You and the computer chose ${humanChoice}`;
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || 
              (humanChoice === "paper" && computerChoice === "rock") ||
              (humanChoice === "scissors" && computerChoice === "paper")) {
        announce.textContent = `You score! ${humanChoice} beats ${computerChoice}`;
        humanScore += 1;
    } else {
        announce.textContent = `Computer Scores! ${humanChoice} loses to ${computerChoice}`;
        computerScore += 1;
    }
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
    body.appendChild(announce);
}

function handleRound(humanSelection){
    const winner = document.querySelector("div")
    if (humanScore === 5){
        winner.textContent = `You win! Final Score: ${humanScore} - ${computerScore}`;
        body.appendChild(winner);
        return;
    } else if (computerScore ===5) {
        winner.textContent = `Computer wins! Final Score: ${computerScore} - ${humanScore}`;
        body.appendChild(winner);
        return;
    }

    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

}

function playGame() {
    const btnRock = document.querySelector("#rock");
    btnRock.addEventListener("click", () => {
        handleRound("rock");
    });
        
    const btnPaper = document.querySelector("#paper");
    btnPaper.addEventListener("click", () => {
        handleRound("paper");
    });
        
    const btnScissors = document.querySelector("#scissors");
    btnScissors.addEventListener("click", () => {
        handleRound("scissor");
    });
}


//Function call to play the game.
playGame();