getComputerChoice = function() {
    let choice = Math.floor(Math.random()*3) + 1;
    if (choice === 1) {
        console.log("Computer chooses rock");
        return "rock";
    }
    else if (choice === 2) { 
        console.log("Computer chooses paper");
        return "paper";
    }
    else if (choice === 3){
        console.log("Computer chooses scissors");
        return "scissors";
    }
    else console.log("computer could not decide");
}

getHumanChoice = function() {
    let choice = prompt('Input "rock"/"paper"/"scissors"').toLowerCase();
    if (choice === "rock") {
        console.log("Player chooses rock");
        return "rock";
    }
    else if (choice === "paper") { 
        console.log("Player chooses paper");
        return "paper";
    }
    else if (choice === "scissors"){
        console.log("Player chooses scissors");
        return "scissors";
    }
    else {
        console.log("Player is a clown.");
        return "";
    }
}

playRound = function() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let winner = "";

    if(computerChoice == "rock") {
        if (humanChoice == "paper") {
            winner = "human";
        }
        else if (humanChoice == "scissors") {
            winner = "computer";
        }
    }

    if(computerChoice == "paper") {
        if (humanChoice == "scissors") {
            winner = "human";
        }
        else if (humanChoice == "rock") {
            winner = "computer";
        }
    }

    if(computerChoice == "scissors") {
        if (humanChoice == "rock") {
            winner = "human";
        }
        else if (humanChoice == "paper") { 
            winner = "computer";
        }
    }

    if (winner == "human") {
        humanScore++;
        console.log("Player wins the round!");
    }
    else if (winner == "computer") {
        computerScore++;
        console.log("Computer wins the round!");
    }
    else {
        console.log("No winner this round.");
    }
    console.log("\n");
    
}

playGame = function() {
    
    for(let i=0; i<5; i++) {
        playRound();
    }

    console.log("-------------------------\n")

    console.log("Player-Score:" + humanScore);
    console.log("Computer-Score:" + computerScore + "\n");

    if(humanScore > computerScore) 
        console.log("Player wins the game!");
    else if (humanScore < computerScore) 
        console.log("Computer wins the game!");
    else console.log("There are no winners here.")
}

let humanScore = 0;
let computerScore = 0;

playGame()