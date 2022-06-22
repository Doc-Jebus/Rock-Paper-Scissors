let win = 1;
let lose = 0;

let computerPlayer

let beginGame = document.querySelectorAll("button");

beginGame.forEach(game => game.addEventListener('click', (e) => {
    humanPlayer = e.target.id;
    console.log(beginGame);
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

    


