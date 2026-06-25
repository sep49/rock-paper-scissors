/* 

*/
let randomNumber
function getComputerChoice() {
    randomNumber = Math.random();
    if (randomNumber < 0.34) {
        return "rock";
    }
    else if (randomNumber <= 0.67) {
        return "paper";
    }
    else if (randomNumber <= 1) {
        return "scissors";
    }
    
} 

let humanChoice;
function getHumanChoice() {
    humanChoice = window.prompt("Please choose rock, paper, or scissors.");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}



function playGame() {
    
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {

        if (humanChoice == "rock" && computerChoice == "scissors"){
            humanScore++;
            console.log("You win! Rock beats scissors.")
        } else if (humanChoice == "paper" && computerChoice == "rock" ){
            humanScore++;
            console.log("You win! Paper beats rock.")
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore++;
            console.log("You win! Scissors beats paper.")
        } else if (humanChoice == "rock" && computerChoice == "paper" ){
            computerScore++;
            console.log("You lose! Paper beats rock.")
        } else if (humanChoice == "paper" && computerChoice == "scissors" ){
            computerScore++;
            console.log("You lose! Scissors beats paper.")
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            computerScore++;
            console.log("You lose! Rock beats scissors.")
        } else if (humanChoice == computerChoice) {
            console.log("It's a tie!");
        }
    }
    
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

playGame() 
