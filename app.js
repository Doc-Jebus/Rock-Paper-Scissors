let win = 1;
let lose = 0;

let humanPlayer = ["rock", "paper", "scissors"];
let computerPlayer = ["ROCK", "PAPER", "SCISSORS"];

const buttonTest = document.querySelector("#test-button");
function computerPlayer() {
    
    let randomComNum = Math.floor(Math.random()*computerPlayer.length);
    let randomComArray = computerPlayer[randomComNum];
    console.log(randomComArray);
}
buttonTest.addEventListener('click', computerPlayer);


const buttonRock = document.querySelector("#button-rock").value(humanPlayer[0]);
const buttonPaper = document.querySelector("#button-paper");
const buttonScissors = document.querySelector("#button-scissors");

function playGame(playerSelection, computerSelection) {
    let playerSelection = humanPlayer[buttonRock, buttonPaper, buttonScissors];
    let computerSelection = computerPlayer();
    alert(playerSelection, computerSelection);
}
    
buttonRock.addEventListener('click', playGame);
buttonPaper.addEventListener('click', playGame);
buttonScissors.addEventListener('click', playGame);

