// put the playerSelectionPrompt somewhere where it will run every round.




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

function playRound() {
    let playerSelectionPrompt = prompt("Enter: 'rock', 'paper' or 'scissors'");
    let computerSelection = computerPlay();
    let playerSelection = playerSelectionPrompt.toLowerCase();
    
    if (playerSelection === computerSelection) {
        console.log("its a draw")
        return "draw"
    } else if (playerSelection === "rock" && computerSelection === "scissors") { //wins
        console.log("You win! rock beats scissors")
        return "win"
    } else if (playerSelection === "paper" && computerSelection === "rock"){ 
        console.log("You win! paper beats rock")
        return "win"
    } else if (playerSelection === "scissors" && computerSelection === "paper"){ 
        console.log("You win! scissors beats paper")
        return "win"
    } else if (computerSelection === "rock" && playerSelection === "scissors") { //losses 
        console.log("You lose! rock beats scissors")
        return "lose"
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        console.log("You lose! paper beats rock")
        return "lose"
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        console.log("You lose! scissors beats paper")
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
        console.log(`You win, Player score: ${playerScore} Computer score: ${computerScore} number of draws: ${drawScore}`)
    } else if (round > 4 && computerScore > playerScore) {
        console.log(`You lose, Player score:${playerScore} Computer score:${computerScore} number of draws: ${drawScore}`)
    } else if (round > 4 && computerScore === playerScore) {
        console.log(`Draw!, Player score:${playerScore} Computer score:${computerScore} number of draws: ${drawScore}`)
    } else {
        console.log(result)
    }
}

game()