const playerResults = document.getElementById("player-results");
const computerResults = document.getElementById("computer-results");
const resultsTotal = document.getElementById("result");
let beginGame = document.querySelectorAll("button");

let win = 1;
let lose = 0;

let computerPlayer



beginGame.forEach(game => game.addEventListener('click', (e) => {
    humanPlayer = e.target.id;
    playerResults.innerHTML = humanPlayer
}));


function playGame() {
    
    const computerSelection = ()=> {
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
    };
    console.log(playGame);
}

    


