//Set two integer variables to keep track of computer and user score.

let humanScore = 0;
let computerScore = 0;

//Generates a random number between 1-10 and chooses an option of rock, paper, or scissor
//based on the number range.
function getComputerChoice(){

    let computerChoice = "";
    let num = Math.floor(Math.random() * 10);
    
    if (num >= 0 && num <=3){
        computerChoice = "Rock";
    } else if (num >= 4 && num <=6){
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors"
    }
    //return the choice in lowercase for case sensitive measures
    return computerChoice.toLowerCase();
}

function getHumanChoice(){

    let humanChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();

    while (humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors') {
        humanChoice = prompt("Wrong input, try again! Rock, Paper, or Scissors?").toLowerCase();
    }
    return humanChoice;
}

function playRound(humanChoice, computerChoice){

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

function playGame() {

    for (let i=0; i<5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore){
        return console.log("You won the game. You scored " + `${humanScore}` + " and the computer scored " + `${computerScore}`);
    } else {
        return console.log("You lost the game. You scored " + `${humanScore}` + " and the computer scored " + `${computerScore}`);
    } 
}

playGame();