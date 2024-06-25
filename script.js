function getComputerChoice(){
    let choices = ['rock', 'paper','scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getHumanChoice(){
    let choice=prompt("Choose: Rock, Paper or Scissors!");
    return choice;
}


let humanScore=0;
let computerScore=0;


function playround(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win! Rock beats Scissors");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper");
        humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors"){
        console.log("You Lose! Rock beats Scissors");
        computerScore++;
    } else if ( computerChoice === "paper" && humanChoice === "rock") {
        console.log("You Lose! Papper beats Rock");
        computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("You Lose! Scissors beats Paper");
        computerScore++;
    }
}

function playgame(){
   
    for (let i=0; i<5; i++){
        const humanChoice=getHumanChoice();
        const computerChoice=getComputerChoice();
        playround(humanChoice, computerChoice);
    }
    console.log("Your Score: "+humanScore+" ---- "+"Computer Score: "+computerScore);
}


playgame();