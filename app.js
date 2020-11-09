const buttonRock = document.querySelector('#rock-button');
const buttonPaper = document.querySelector('#paper-button');
const buttonScissors = document.querySelector('#scissors-button');

const resultContainer = document.querySelector('#result-container');
const scoreContainer = document.querySelector('#score-container');

let round = 0;
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

buttonRock.addEventListener("click", playRound);
buttonPaper.addEventListener("click", playRound);
buttonScissors.addEventListener("click", playRound);




function computerPlay() {
    computerChoice = Math.floor(Math.random() * 3) + 1
    switch(computerChoice) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}


function playRound(event){
    let computerSelection = computerPlay();
    let playerSelection = event.target.getAttribute("value");
    let result; 

    
    round++
    console.log(round)
    if (playerSelection === computerSelection) {
        drawScore++
        resultContainer.textContent = "Draw";
        result = "draw";
    } else if (playerSelection === "rock" && computerSelection === "scissors") { //wins
        playerScore++
        resultContainer.textContent = "You win! rock beats scissors";
        result = "win";
    } else if (playerSelection === "paper" && computerSelection === "rock"){ 
        playerScore++
        resultContainer.textContent = "You win! paper beats rock";
        result = "win";
    } else if (playerSelection === "scissors" && computerSelection === "paper"){ 
        playerScore++
        resultContainer.textContent = "You win! scissors beats paper";
        result = "win";
    } else if (computerSelection === "rock" && playerSelection === "scissors") { //losses 
        computerScore++
        resultContainer.textContent = "You lose! rock beats scissors";
        result = "lose";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore++
        resultContainer.textContent = "You lose! paper beats rock";
        result = "lose";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        computerScore++
        resultContainer.textContent = "You lose! scissors beats paper";
        result = "lose";
    } else {
        result = "Please refresh the page and enter rock paper or scissors";
    }

    

    if (round > 4 && playerScore > computerScore) {
        scoreContainer.textContent = `You win, Round: ${round} Player score: ${playerScore} Computer score: ${computerScore} number of draws: ${drawScore}`;
    } else if (round > 4 && computerScore > playerScore) {
        scoreContainer.textContent = `You lose, Round: ${round} Player score:${playerScore} Computer score:${computerScore} number of draws: ${drawScore}`;
    } else if (round > 4 && computerScore === playerScore) {
        scoreContainer.textContent = `Draw!, Round: ${round} Player score:${playerScore} Computer score:${computerScore} number of draws: ${drawScore}`;
    } else {
        scoreContainer.textContent = `Running Score: Round: ${round} Player score:${playerScore} Computer score:${computerScore} number of draws: ${drawScore}`;
    }

    if (round > 4) {
        round = 0;
        drawScore = 0;
        playerScore = 0;
        computerScore = 0;
    }
}