const ROUND_COUNT = 5

///////////////////////////////////////////

function getComputerChoice() { return ['Rock','Paper','Scissors'][randInt(3)] }

function randInt(num) { return Math.floor(Math.random() * (num - 0.1)) }

function playRound(playerSelection, computerSelection = getComputerChoice()) {

    playerSelection = playerSelection.trim().toLowerCase();

    switch(playerSelection) {
        case "rock":
            if (computerSelection === 'Rock') return "It's a tie! You both picked Rock";
            else if (computerSelection === 'Paper') return "You Lose! Paper beats Rock";
            else return "You Win! Rock beats Scissors";
        case "paper":
            if (computerSelection === 'Rock') return "You Win! Paper beats Rock";
            else if (computerSelection === 'Paper') return "It's a tie! You both picked Paper";
            else return "You Lose! Scissors beats Paper";
        case "scissors":
            if (computerSelection === 'Rock') return "You Lose! Rock beats Scissors";
            else if (computerSelection === 'Paper') return "You Win! Scissors beats Paper";
            else return "It's a tie! You both picked Scissors";
        default:
            return "Huh? Try again.";
    }
}

function game() {
    console.log(`WELCOME TO ROCK PAPER SCISSORS!
    
    This will be a game of ${GAME_COUNT} rounds.
    `);

    for (let i = 0; i < ROUND_COUNT; i++) {
        console.log(`
        ROUND ${i+1}:
        `);
        console.log(playRound(prompt("Enter your choice of weapon: ")));
    }

    console.log('Thanks for playing!')
}