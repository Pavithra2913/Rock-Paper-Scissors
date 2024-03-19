

function getComputerChoice() {
    let arr=["rock","paper","scissor"];
    return arr[Math.floor(Math.random() * arr.length)];
}

function getPlayerChoice() {
    let choice = prompt("Rock, Paper or Scissor");
    return choice.toLowerCase();
}


function playRound(playerSelection, computerSelection) {
    playerSelection=getPlayerChoice();
    computerSelection=getComputerChoice();
    
    console.log(playerSelection);
    console.log(computerSelection);
    if(playerSelection === "rock" && computerSelection === "paper") {
        computer++;
        alert("The computer selected "+computerSelection+" you lose");
        return("You Lose");
    } else if(playerSelection === "rock" && computerSelection === "scissor") {
        player++;
        alert("The computer selected "+computerSelection+" you win");
        return("You Win");
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        player++;
        alert("The computer selected "+computerSelection+" you win");
        return("You Win");
    } else if(playerSelection === "paper" && computerSelection === "scissor") {
        computer++;
        alert("The computer selected "+computerSelection+" you lose");
        return("You Lose");
    } else if(playerSelection === "scissor" && computerSelection === "rock") {
        computer++;
        alert("The computer selected "+computerSelection+" you lose");
        return("You Lose");
    } else if(playerSelection === "scissor" && computerSelection === "paper") {
        player++;
        alert("The computer selected "+computerSelection+" you win");
        return("You Win");
    } else if(playerSelection === computerSelection) {
        alert("The computer selected "+ computerSelection +" It's a draw");
        return("tie");
    }
}


let computer=0, player=0;
function playGame() {

    for(let i=0;i<5;i++) {
        console.log(playRound());
    }
}

playGame();

if(computer>player) {
    alert("Computer wins with a score of "+computer);
} else if(player>computer) {
    alert("Player wins with a score of "+player);
} else {
    alert("Its a Tie");
}
console.log(computer,player);
