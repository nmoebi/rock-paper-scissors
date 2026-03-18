const plScore = document.querySelector("#scorePlayer");
const plChoice = document.querySelector("#playerChoice");

const comScore = document.querySelector("#scoreComputer");
const comChoice = document.querySelector("#computerChoice");

const roundText = document.querySelector("#round");
const winnerText = document.querySelector("#winner"); 

const btnRock = document.querySelector("#btnRock"); 
    btnRock.addEventListener("click", () => playRound("rock"));

const btnPaper = document.querySelector("#btnPaper");
    btnPaper.addEventListener("click", () => playRound("paper"));

const btnScissors = document.querySelector("#btnScissors");
    btnScissors.addEventListener("click", () => playRound("scissors"));

    let humanScore = 0;
    let computerScore = 0;
    let round = 0;

getComputerChoice = function() {
    let choice = Math.floor(Math.random()*3) + 1;
    if (choice === 1) 
        return "rock";
    else if (choice === 2) 
        return "paper";
    else if (choice === 3) 
        return "scissors";
    else console.log("error with computer-choice");
}

playRound = function(humanChoice) {
    let computerChoice = getComputerChoice();
    let winner;

    roundText.textContent = `Round: ${++round}`;
    plChoice.textContent = `Player-Choice: ${humanChoice}`;
    comChoice.textContent = `Computer-Choice: ${computerChoice}`;

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
        plScore.textContent = "Player-Score: " + ++humanScore;
        winnerText.textContent = "Player wins the round!";
    }
    else if (winner == "computer") {
        comScore.textContent = "Computer-Score: " + ++computerScore;
        winnerText.textContent = "Computer wins the round!";
    }
    else winnerText.textContent = "No winner this round!";
}
