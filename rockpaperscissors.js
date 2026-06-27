/*  
For now, remove the logic that plays exactly five rounds.
Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
Add a div for displaying results and change all of your console.logs into DOM methods.
Display the running score, and announce a winner of the game once one player reaches 5 points.
*/


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
    resultsDiv.textContent = `Score: You ${humanScore} - Computer ${computerScore}`;

}

if (humanScore === 5) {
    resultsDiv.textContent = "You win the game!";
} else if (computerScore === 5) {
    resultsDiv.textContent = "Computer wins the game!";
}   




