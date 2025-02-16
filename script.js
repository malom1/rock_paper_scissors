let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){

    let computerChoice = "";
    let num = Math.floor(Math.random() * 10);
    
    if (num >= 0 && num <=3){
        computerChoice = "Rock";
    } else if (num >= 4 && num <=6){
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissor"
    }

    return computerChoice;
}

function getHumanChoice(){

    let humanChoice = console.log(prompt("Rock, Paper, or Scissors?"))
    return humanChoice;
}

function playRound(humanChoice, computerChoice){

    
}
console.log(getComputerChoice());
console.log(getHumanChoice());