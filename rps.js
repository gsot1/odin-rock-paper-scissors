console.log(getComputerChoice());

function getComputerChoice() { return ['Rock','Paper','Scissors'][randInt(3)] }

function randInt(num) { Math.floor(Math.random() * (num - 0.1)) }

function game(playerSelection, computerSelection = getComputerChoice()) {

    playerSelection = playerSelection.trim().toLowerCase();

    switch(playerSelection) {
        case "rock":
            if (computerSelection === 'Rock') console.log("It's a tie! You both picked Rock");
            else if (computerSelection === 'Paper') console.log("You Lose! Paper beats Rock");
            else console.log("You Win! Rock beats Scissors");
            break;
        case "paper":
            if (computerSelection === 'Rock') console.log("You Win! Paper beats Rock");
            else if (computerSelection === 'Paper') console.log("It's a tie! You both picked Paper");
            else console.log("You Lose! Scissors beats Paper");
            break;
        case "scissors":
            if (computerSelection === 'Rock') console.log("You Lose! Rock beats Scissors");
            else if (computerSelection === 'Paper') console.log("You Win! Scissors beats Paper");
            else console.log("It's a tie! You both picked Scissors");
            break;
        default:
            console.log("Huh? Try again.")
    }
}