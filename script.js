const getComputerChoice = function() {

    const number = Math.random(); 
    const choice = number < 0.33 ? "rock" : number < 0.66 ? "paper" : "scissors" ;
    return choice;
}


const getHumanChoice = function()  {
    
    let i = 0;
    while (true) {

        let input = i === 0 ? prompt("Choices are 'rock', 'paper' and 'scissors'.\nEnter a choice .") :
        prompt("Invalid input. Choices are 'rock', 'paper' and 'scissors'.") ;
        
        let choice = input === "rock" ? "rock" : input === "paper" ? "paper" :
        input === "scissors" ? "scissors" : null ;
        
        if (choice !== null) {
            return choice ;
        }
        i++ ;
    }
}


const playGame = function() {

    let humanScore = 0 ;
    let computerScore = 0 ;

    const playRound = function(HumanChoice, computerChoice) {
        // To check who is the winner.
        let winner;
    
        if (HumanChoice === "rock" && computerChoice === "paper") {
            winner = "computer";
            console.log(`You lose! "${computerChoice} beats ${HumanChoice}".`);
        }
        else if (HumanChoice === "paper" && computerChoice === "scissors") {
            winner = "computer";
            console.log(`You lose! "${computerChoice} beats ${HumanChoice}".`);
        }
        else if (HumanChoice === "scissors" && computerChoice === "rock") {
            winner = "computer";
            console.log(`You lose! "${computerChoice} beats ${HumanChoice}".`);
        }
        else if (HumanChoice === "paper" && computerChoice === "rock") {
            winner = "user";
            console.log(`You win! "${HumanChoice} beats ${computerChoice}".`);
        }
        else if (HumanChoice === "rock" && computerChoice === "scissors") {
            winner = "user";
            console.log(`You win! "${HumanChoice} beats ${computerChoice}".`);
        }
        else if (HumanChoice === "scissors" && computerChoice === "paper") {
            winner = "user";
            console.log(`You win! "${HumanChoice} beats ${computerChoice}".`);
        }
        else {
            winner = "tie";
            console.log(`Tie! user and computer chose ${HumanChoice}.`);
        }
    
        return winner;
    }

    console.log("Welcome to Rock Paper Scissors game.");
    
    for (let i = 0; i < 5; i++) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        let winner = playRound(humanSelection, computerSelection);
        if (winner === "user") {
            humanScore++;
        }
        else if (winner === "computer") {
            computerScore++;
        }
        console.log(`User score ${humanScore} \t\t Computer score ${computerScore}.`);
    }
    if (humanScore > computerScore) {
        console.log(`Congratulations you have won.`);
    }
    else if (computerScore > humanScore) {
        console.log(`Computer has won.`);
    }
    else {
        console.log("Tied! Both have same score.");
    }
}

playGame();