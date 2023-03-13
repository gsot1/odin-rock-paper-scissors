const POINT_COUNT = 5;
let playerWin;
let computWin;
let playerChoice;
let computChoice;

///////////////////////////////////////////

function randInt(num) { return Math.floor(Math.random() * (num - 0.1)) }

function playRound(e) {

    playerChoice = e.target.id;
    computChoice = ['rock','paper','scissors'][randInt(3)];

    switch(playerChoice) {
        case "rock":
            if (computChoice === 'rock') return "tie";
            else if (computChoice === 'paper') return "lose";
            else return "win";
        case "paper":
            if (computChoice === 'rock') return "win";
            else if (computChoice === 'paper') return "tie";
            else return "lose";
        case "scissors":
            if (computChoice === 'rock') return "lose";
            else if (computChoice === 'paper') return "win";
            else return "tie";
    }
}

function gameLoop(e) {

    if (computWin < 5 && playerWin < 5) {

        const results = playRound(e);

        switch (results) {
            case "win":
                document.querySelector('#results').innerText = `YOU WIN! ${playerChoice} beats ${computChoice}`;
                ++playerWin;
                break;
            case "lose":
                document.querySelector('#results').innerText = `YOU LOST! ${computChoice} beats ${playerChoice}`;
                ++computWin;
                break;
            case "tie":
                document.querySelector('#results').innerText = `IT'S A DRAW! You both chose ${playerChoice.trim()}`;
                break;
        }

    }
    
    if (computWin === 5 && computWin > playerWin) {
        document.querySelector('#results').innerText = `SORRY! YOU LOST`;
    } else if (playerWin === 5 && computWin < playerWin) {
        document.querySelector('#results').innerText = `VICTORY! YOU WIN`;
    }

    document.querySelector('#score').innerText = `${playerWin} - ${computWin}`;
}

function gameSetup() {
    playerWin = 0;
    computWin = 0;
    playerChoice = '';
    computChoice = '';

    let rButton = document.querySelector('#rock');
    let pButton = document.querySelector('#paper');
    let sButton = document.querySelector('#scissors');

    rButton.addEventListener("click", gameLoop);
    pButton.addEventListener("click", gameLoop);
    sButton.addEventListener("click", gameLoop);
}

/////////////////////////////////////////

gameSetup();