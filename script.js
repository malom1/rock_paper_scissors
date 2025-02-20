//Set two integer variables to keep track of computer and user score.

let humanScore = 0;
let computerScore = 0;

//Generates a random number between 1-10 and chooses an option of rock, paper, or scissor
//based on the number range.
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() *choices.length)];
}

// Takes in user input and checks to see if the input is valid.
// function getHumanChoice(){

//     let humanChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();

//     while (humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors') {
//         humanChoice = prompt("Wrong input, try again! Rock, Paper, or Scissors?").toLowerCase();
//     }
//     return humanChoice;
// }

//This function represents one round and increments scores accordingly.
function playRound(humanChoice, computerChoice){

    //Base case to see if it is a tie. No points incremented for either player.
    if (humanChoice===computerChoice){
        console.log("Tie! You and the computer both chose "+`${humanChoice}`);
    } else if (humanChoice==='rock' && computerChoice ==='paper') {
        console.log("You lose! Paper beats rock.");
        computerScore += 1;
    } else if (humanChoice==='paper' && computerChoice ==='scissors') {
        console.log("You lose! Scissors beats paper.");
        computerScore += 1;
    } else if (humanChoice==='scissors' && computerChoice ==='rock') {
        console.log("You lose! Rock beats scissors.");
        computerScore += 1;
    } else {
        console.log("You win! " +`${humanChoice}` + " beats " + `${computerChoice}` + ".");
        humanScore += 1;
    }
}

function handleRound(humanSelection){
    if (humanScore >= 5 || computerScore >= 5){
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