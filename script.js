let playerChoice = null;

const getComputerChoice = () => {

    const number = Math.random()
    //const choices = ["rock", "paper", "scissors"]
    //const index = Math.floor(Math.random() * choices.length);
    const choice = number < 0.33 ? "rock" : number < 0.66 ? "paper" : "scissors" ;
    return choice;
}

const playRound = (humanChoice, computerChoice) => {
    let winner;

    if (humanChoice === "rock" && computerChoice === "paper") {
        winner = "computer";
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        winner = "computer";
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        winner = "computer";
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        winner = "player";
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        winner = "player";
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        winner = "player";
    }
    else {
        winner = "draw";
    }

    return {
        winner: winner,
        user: humanChoice,
        computer: computerChoice,
        userEmoji: winner === "player" || winner === "draw" ?
         "😁" : "🤬",
        computerEmoji: winner === "computer" || winner === "draw" ?
         "😁" : "🤬",
    };
}

let playerScore = 0;
let computerScore = 0;

const updateScore = () => {
    playerScoreHolder.textContent = String(playerScore);
    computerScoreHolder.textContent = String(computerScore);
}

const playGame = () => {

    const humanSelection = playerChoice;
    const computerSelection = getComputerChoice();
    let winner = playRound(humanSelection, computerSelection);
    if (winner.winner === "player") {
        playerScore++;
    }
    else if (winner.winner === "computer") {
        computerScore++;
    }
    updateScore();
    return winner;
}

const btnRock = document.querySelector('#rock').firstElementChild;
const btnPaper = document.querySelector('#paper').firstElementChild;
const btnScissor = document.querySelector('#scissor').firstElementChild;
const btnPlay = document.querySelector('#play-btn');
const playerScoreHolder = document.querySelector('#player-score .score-holder');
const computerScoreHolder = document.querySelector('#computer-score .score-holder');
const itemContainer = document.querySelector('#item-container');
const displayWin = document.querySelector('#display-win');
const newGame = document.querySelector('#new-game');
const startOver = document.querySelector('#start-over');

const userChoiceImg = document.createElement('img');
const computerChoiceImg = document.createElement('img');
const emojiUser = document.createElement('p');
const emojiComputer = document.createElement('p');

btnRock.addEventListener('click', () => {
    playerChoice = "rock";
})

btnPaper.addEventListener('click', () => {
    playerChoice = "paper";
})

btnScissor.addEventListener('click', () => {
    playerChoice = "scissors";
})

newGame.addEventListener('click', () => {
    itemContainer.style.display = 'flex';
    displayWin.style.display = 'none';
})

btnPlay.addEventListener('click', () => {
    if (!playerChoice) {
        alert("Choose an option first.");
        return 0;
    }
    let currentWinner = playGame();

    userChoiceImg.src = `./img/${currentWinner.user}.png`;
    emojiUser.textContent = currentWinner.userEmoji;
    emojiUser.style.fontSize = '40px';
    document.querySelector("#display-items #player").append(userChoiceImg);
    document.querySelector("#display-items #player").append(emojiUser);
    computerChoiceImg.src = `./img/${currentWinner.computer}.png`;
    emojiComputer.textContent = currentWinner.computerEmoji;
    emojiComputer.style.fontSize = '40px';
    document.querySelector("#display-items #computer").append(computerChoiceImg);
    document.querySelector("#display-items #computer").append(emojiComputer);

    itemContainer.style.display = 'none';
    displayWin.style.display = 'block';
    console.log(startOver);
})


startOver.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    itemContainer.style.display = 'flex';
    displayWin.style.display = 'none';
    updateScore();
})