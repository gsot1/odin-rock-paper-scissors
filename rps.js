const ROUND_COUNT = 5;

///////////////////////////////////////////

function randInt(num) { return Math.floor(Math.random() * (num - 0.1)) }

function getComputerChoice() { return ['Rock','Paper','Scissors'][randInt(3)] }

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.trim().toLowerCase();

    switch(playerSelection) {
        case "rock":
            if (computerSelection === 'Rock') return "tie";
            else if (computerSelection === 'Paper') return "lose";
            else return "win";
        case "paper":
            if (computerSelection === 'Rock') return "win";
            else if (computerSelection === 'Paper') return "tie";
            else return "lose";
        case "scissors":
            if (computerSelection === 'Rock') return "lose";
            else if (computerSelection === 'Paper') return "win";
            else return "tie";
        default:
            return "retry";
    }
}

function game() {
    let playerWin = 0;
    let computWin = 0;
    let playerChoice;
    let computChoice;

    console.log(`WELCOME TO ROCK PAPER SCISSORS!
    
This will be a game of ${ROUND_COUNT} rounds.
    `);

    for (let i = 0; i < ROUND_COUNT; i++) {
        console.log(`
ROUND ${i+1}:
        `);

        let results = "retry";

        while (results === "retry") {
            playerChoice = prompt("Enter rock, paper, or scissors: ");
            computChoice = getComputerChoice();

            results = playRound(playerChoice, computChoice);

            switch (results) {
                case "win":
                    console.log(`YOU WIN! ${playerChoice.trim()} beats ${computChoice}`);
                    ++playerWin;
                    break;
                case "lose":
                    console.log(`YOU LOST! ${computChoice} beats ${playerChoice.trim()}`);
                    ++computWin;
                    break;
                case "tie":
                    console.log(`IT'S A DRAW! You both chose ${playerChoice.trim()}`);
                    break;
                default:
                    console.log("What? Please try again.");
            }
        }
    }

    if (computWin > playerWin) {
        console.log(`SORRY! YOU LOST ${computWin}-${playerWin}`);
    } else if (computWin < playerWin) {
        console.log(`VICTORY! YOU WON ${playerWin}-${computWin}`);
    } else {
        console.log(`DRAW! YOU BOTH SCORED ${playerWin}`);
    }

    return 'Thanks for playing!';
}

/////////////////////////////////////////

console.log(`To get started, type "game()" below.`);