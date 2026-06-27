
let humanScore = 0
let computerScore = 0


// add buttons to the page

const rockButton = document.createElement("button");
rockButton.textContent = "Rock";
rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));
document.body.appendChild(rockButton);

const paperButton = document.createElement("button");
paperButton.textContent = "Paper";
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));
document.body.appendChild(paperButton);

const scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));
document.body.appendChild(scissorsButton);  

// add a div to display results
const resultsDiv = document.createElement("div"); 
resultsDiv.id = "results";
document.body.appendChild(resultsDiv);

const scoreDiv = document.createElement("div");
scoreDiv.id = "score";
document.body.appendChild(scoreDiv);

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

function playRound(humanChoice, computerChoice) {

    if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++;
        resultsDiv.textContent("You win! Rock beats scissors.")
    } else if (humanChoice == "paper" && computerChoice == "rock" ){
        humanScore++;
        resultsDiv.textContent = "You win! Paper beats rock."
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        resultsDiv.textContent = "You win! Scissors beats paper."
    } else if (humanChoice == "rock" && computerChoice == "paper" ){
        computerScore++;
        resultsDiv.textContent = "You lose! Paper beats rock."
    } else if (humanChoice == "paper" && computerChoice == "scissors" ){
        computerScore++;
        resultsDiv.textContent = "You lose! Scissors beats paper." 
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        resultsDiv.textContent = "You lose! Rock beats scissors."
    } else if (humanChoice == computerChoice) {
        resultsDiv.textContent = "It's a tie!";
    }
    scoreDiv.textContent = `Score: You ${humanScore} - Computer ${computerScore}`;

    if (humanScore === 5) {
    scoreDiv.textContent = "You win the game!";
    } else if (computerScore === 5) {
    scoreDiv.textContent = "Computer wins the game!";
    }   
}






