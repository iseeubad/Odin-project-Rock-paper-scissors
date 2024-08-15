function getComputerChoice(){
    let choices = ['rock', 'paper','scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


let humanScore=0;
let computerScore=0;

const divRound = document.createElement('div');
divRound.classList.add('divRound');
const divScore = document.createElement('div');
divScore.classList.add('divScore');
const body = document.querySelector('body');
body.appendChild(divScore);
body.appendChild(divRound);


function playround(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    
    if (humanChoice === computerChoice) {
        divRound.textContent ="It's a tie!";
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        divRound.textContent = "You win! Rock beats Scissors";
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        divRound.textContent = "You win! Paper beats Rock";
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        divRound.textContent = "You win! Scissors beats Paper";
        humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors"){
        divRound.textContent = "You Lose! Rock beats Scissors";
        computerScore++;
    } else if ( computerChoice === "paper" && humanChoice === "rock") {
        divRound.textContent = "You Lose! Papper beats Rock";
        computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        divRound.textContent = "You Lose! Scissors beats Paper";
        computerScore++;
    }

    divScore.textContent = "Your Score: "+humanScore+" ---- "+"Computer Score: "+computerScore;

    if(humanScore === 5){
        divRound.textContent = "You Won the Game!";
        divRound.style.color = "green";
        disableButtons();
        
    } else if(computerScore === 5){
        divRound.textContent = "You Lost the Game!";
        divRound.style.color = "red";
        disableButtons();
    }
}

function disableButtons() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");

function playgame(){
    rock.addEventListener('click', () => playround(rock.textContent, getComputerChoice()));
    scissors.addEventListener('click', () => playround(scissors.textContent, getComputerChoice()));
    paper.addEventListener('click', () => playround(paper.textContent, getComputerChoice()));
}


playgame();