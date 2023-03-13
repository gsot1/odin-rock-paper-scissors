// create a div for results and remove the console.log calls
// display the running score

const POINT_COUNT = 5;
let playerWin;
let computWin;
let playerChoice;
let computChoice;

///////////////////////////////////////////

function randInt(num) { return Math.floor(Math.random() * (num - 0.1)) }

function playRound(e) {

    playerChoice = e.target.id;
    computChoice = ['Rock','Paper','Scissors'][randInt(3)];

    switch(playerChoice) {
        case "rock":
            if (computChoice === 'Rock') return "tie";
            else if (computChoice === 'Paper') return "lose";
            else return "win";
        case "paper":
            if (computChoice === 'Rock') return "win";
            else if (computChoice === 'Paper') return "tie";
            else return "lose";
        case "scissors":
            if (computChoice === 'Rock') return "lose";
            else if (computChoice === 'Paper') return "win";
            else return "tie";
    }
}

function gameLoop(e) {

    if (computWin < 5 && playerWin < 5) {

        const results = playRound(e);

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
        }

    } else {

        if (computWin > playerWin) {
            console.log(`SORRY! YOU LOST ${playerWin}-${computWin}`);
        } else if (computWin < playerWin) {
            console.log(`VICTORY! YOU WON ${playerWin}-${computWin}`);
        }

    }
}

function gameSetup() {
    playerWin = 0;
    computWin = 0;
    playerChoice = '';
    computChoice = '';

    let rButton = document.querySelector('#rock');
    let pButton = document.querySelector('#paper');
    let sButton = document.querySelector('#scissors');

    console.log(`WELCOME TO ROCK PAPER SCISSORS!
    
The game will play until someone wins ${POINT_COUNT} rounds.
    `);

    rButton.addEventListener("click", gameLoop);
    pButton.addEventListener("click", gameLoop);
    sButton.addEventListener("click", gameLoop);
}

/////////////////////////////////////////

gameSetup();