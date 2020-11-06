// put the playerSelectionPrompt somewhere where it will run every round.

const buttonRock = document.querySelector('#rock-button');
const buttonPaper = document.querySelector('#paper-button');
const buttonScissors = document.querySelector('#scissors-button');

const resultContainer = document.querySelector('#result-container');
const scoreContainer = document.querySelector('#score-container');

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



function playRound(event) {
    
    let computerSelection = computerPlay();
    let playerSelection = event.target.getAttribute("value");
    
    if (playerSelection === computerSelection) {
        resultContainer.textContent = "Draw"
        return "draw"
    } else if (playerSelection === "rock" && computerSelection === "scissors") { //wins
        resultContainer.textContent = "You win! rock beats scissors"
        return "win"
    } else if (playerSelection === "paper" && computerSelection === "rock"){ 
        resultContainer.textContent = "You win! paper beats rock"
        return "win"
    } else if (playerSelection === "scissors" && computerSelection === "paper"){ 
        resultContainer.textContent = "You win! scissors beats paper"
        return "win"
    } else if (computerSelection === "rock" && playerSelection === "scissors") { //losses 
        resultContainer.textContent = "You lose! rock beats scissors"
        return "lose"
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        resultContainer.textContent = "You lose! paper beats rock"
        return "lose"
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        resultContainer.textContent = "You lose! scissors beats paper"
        return "lose"
    } else {
        return "Please refresh the page and enter rock paper or scissors"
    }
}



function game() {
    let playerScore = 0;
    let computerScore = 0;
    let drawScore = 0;
    let round = 0;
    let result;
    for (i = 0; i < 5; i++) {
        round++
        console.log (round)
        result = playRound()
        if (result.toLowerCase().includes("win")) {
            playerScore++  
        } else if (result.toLowerCase().includes("lose")) {
            computerScore++
        } else if (result.toLowerCase().includes("draw")) {
            drawScore++
        } else {
            break;
        }
    }
    if (round > 4 && playerScore > computerScore) {
        scoreContainer.textContent = `You win, Player score: ${playerScore} Computer score: ${computerScore} number of draws: ${drawScore}`
    } else if (round > 4 && computerScore > playerScore) {
        scoreContainer.textContent = `You lose, Player score:${playerScore} Computer score:${computerScore} number of draws: ${drawScore}`
    } else if (round > 4 && computerScore === playerScore) {
        scoreContainer.textContent = `Draw!, Player score:${playerScore} Computer score:${computerScore} number of draws: ${drawScore}`
    } else {
        scoreContainer.textContent = result
}

game()