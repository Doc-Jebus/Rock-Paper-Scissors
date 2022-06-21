let win = 1;
let lose = 0;

let humanPlayerChoose = ["rock", "paper", "scissors"];

const buttonTest = document.querySelector("#test-button");
function computerPlayer() {
    let computerPlayerChoose = ["ROCK", "PAPER", "SCISSORS"];
    let randomComNum = Math.floor(Math.random()*computerPlayerChoose.length);
    let randomComArray = computerPlayerChoose[randomComNum];
    console.log(randomComArray);
}
buttonTest.addEventListener('click', computerPlayer);


const buttonRock = document.querySelector("#button-rock");
const buttonPaper = document.querySelector("#button-paper");
const buttonScissors = document.querySelector("#button-scissors");

buttonRock.addEventListener('click', alert(humanPlayerChoose[0]));
buttonPaper.addEventListener('click', alert(humanPlayerChoose[1]));
buttonScissors.addEventListener('click', alert(humanPlayerChoose[2]));

function playGame(playerSelection, computerSelection) {

}