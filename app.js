const playerResults = document.getElementById("player-results");
const computerResults = document.getElementById("computer-results");
const resultsTotal = document.getElementById("result");
let beginGame = document.querySelectorAll("button");

let win = 1;
let lose = 0;

let computerPlayer

beginGame.forEach(game => game.addEventListener('click', (e) => {
    humanPlayer = e.target.id;
    playerResults.innerHTML = humanPlayer;
    computerSelect()
    showResults()
}));

function computerSelect() {
    
    let computerChoose = Math.floor(Math.random()*3)+1;
    if (computerChoose === 1) {
        computerPlayer = "rock"
    }
    if (computerChoose === 2) {
        computerPlayer = "paper"
    }
    if (computerChoose === 3) {
        computerPlayer = "scissors"
    }
    computerResults.innerHTML = computerPlayer;
}

function showResults() {
    if(computerPlayer === "rock" && humanPlayer === "scissors") {
        result = 'Computer wins!';
    }
    else if(computerPlayer === "paper" && humanPlayer === "rock") {
        result = 'Computer wins!';
    }
    else if(computerPlayer === "scissors" && humanPlayer === "paper") {
        result = 'Computer wins!';
    }
    else if(humanPlayer === "scissors" && computerPlayer === "paper") {
        result = 'You won!';
    }
    else if(humanPlayer === "paper" && computerPlayer === "rock") {
        result = 'You won!';
    }
    else if(humanPlayer === "rock" && computerPlayer === "scissors") {
        result = 'You won!';
    } else {
        result = 'Game tied...';
    }
    resultsTotal.innerHTML = result;
}








    


