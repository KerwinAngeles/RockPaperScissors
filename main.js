

// variable score

let humanScore = 0;
let computerScore = 0;
let game = 0;

let rock = 'rock';
let paper = 'paper'
let scissor = 'scissor'


// FIRST STEP.

function getComputerChoice(){
    let min = 1;
    let max = 4;
    let random = Math.floor(Math.random() * (max - min) + min);
    if(random === 1){
        return rock;
    }
    else if(random === 2)
    {
        return paper;
    }
    else{
        return scissor;
    }
}

// SECOND STEP

function getHumanChoice(choice){
    if(choice.toLowerCase() === rock.toLowerCase()){
        return rock;
    }
    else if (choice.toLowerCase() === paper.toLowerCase())
    {
        return paper;
    }
    else if (choice.toLowerCase() === scissor.toLowerCase()){
        return scissor;
    }
    else{
        return 'That option it does not exist'
    }
}

// THIRD STEP

function playRound(humanChoice, computerChoice){
    if(humanChoice === rock && computerChoice === scissor){
        humanScore += 1;
        alert(`you got ${humanScore} point rock beats scissor`)
    }
    else if(humanChoice === paper && computerChoice === rock){
        humanScore += 1;
        alert(`you got ${humanScore} point paper beats rock`)
    }
    else if (humanChoice === scissor && computerChoice === paper){
        humanScore += 1;
        alert(`you got ${humanScore} point scissor beats paper`)
    }
    else if(humanChoice === rock && computerChoice === paper){
        computerScore += 1;
        alert(`computer got ${computerScore} point paper beats rock`)
    }
    else if(humanChoice === scissor && computerChoice === rock){
        computerScore += 1;
        alert(`computer got ${computerScore} point rock beats scissor`);
    }
    else if(humanChoice === paper && computerChoice === scissor){
        computerScore += 1;
        alert(`computer got ${computerScore} point scissor beats paper`)
    }
    else if(humanChoice === computerChoice){
        alert('draw')
    }
    else(
        alert('maybe you write wrong one of this option: \n rock \n paper \n scissor ')
    )

}

function playGame(){
    alert("------------------WELCOME TO ROCK-PAPER-SCISSOR-------------------");
    alert("---------------------------INSTRUCTION----------------------------");
    alert(
    "\n 1: You got 5 opportunities. \n 2: write one of the option that you will see above. \n 3: Enjoy it.");

    alert("-------------------------So let get start-------------------------");
    while(game <= 5){      
        let option = prompt('Please enter one of this option: \n Rock \n Paper \n Scissor', 'Rock');
        const humanSelection = getHumanChoice(option);
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        game += 1;
    }
    document.write(`Human score: ${humanScore} and computer score: ${computerScore}` )

}

playGame();