
let humanScore = 0;
let computerScore = 0;
let game = 0;

let rock = 'rock';
let paper = 'paper'
let scissor = 'scissor'
let gun = 'gun';

const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissor = document.querySelector("#btn-scissor");
const container = document.querySelector("#container");
const content = document.querySelector('#content');
const computerContent = document.querySelector('#computer');
const playerContent = document.querySelector("#player");
const pPoints = document.querySelector("#p-points");
const cPoints = document.querySelector("#c-points");
const draw = document.querySelector("#draw");
const reset = document.querySelector("#btn-reset");

reset.addEventListener('click', () => {
    Reset();
})

btnRock.addEventListener('click', () => {
    if(humanScore == 5 || computerScore == 5 ){

    }else{
        draw.textContent = '';
        let contentRemove = computerContent.querySelectorAll(".fa-regular")
        contentRemove.forEach(icon => icon.remove());
        let contentRemoveSolid = computerContent.querySelectorAll(".fa-solid")
        contentRemoveSolid.forEach(icon => icon.remove());

        let contentRemovePlayer = playerContent.querySelectorAll(".fa-regular")
        contentRemovePlayer.forEach(icon => icon.remove());

        let rockValue = btnRock.value;
        getHumanChoice(rockValue);
        const computer = getComputerChoice();
        console.log(rockValue);
        playRound(rockValue, computer);
    }
    
    
})

btnPaper.addEventListener('click', () => {
    if(humanScore == 5 || computerScore == 5 ){
    }else{
        draw.textContent = '';
        let contentRemove = computerContent.querySelectorAll(".fa-regular")
        contentRemove.forEach(icon => icon.remove());
        let contentRemoveSolid = computerContent.querySelectorAll(".fa-solid")
        contentRemoveSolid.forEach(icon => icon.remove());

        let contentRemovePlayer = playerContent.querySelectorAll(".fa-regular")
        contentRemovePlayer.forEach(icon => icon.remove());

        let paperValue = btnPaper.value;
        getHumanChoice(paperValue);
        const computer = getComputerChoice();
        playRound(paperValue, computer);
    }
    
})

btnScissor.addEventListener('click', () => {
    if(humanScore == 5 || computerScore == 5 ){
    }else{
        draw.textContent = '';
        let contentRemove = computerContent.querySelectorAll(".fa-regular")
        contentRemove.forEach(icon => icon.remove());
        let contentRemoveSolid = computerContent.querySelectorAll(".fa-solid")
        contentRemoveSolid.forEach(icon => icon.remove());

        let contentRemovePlayer = playerContent.querySelectorAll(".fa-regular")
        contentRemovePlayer.forEach(icon => icon.remove());

        let scissorValue = btnScissor.value;
        getHumanChoice(scissorValue);
        const computer = getComputerChoice();
        playRound(scissorValue, computer);
    }
    
})

function getComputerChoice(){
    let min = 1;
    let max = 5;
    let random = Math.floor(Math.random() * (max - min) + min);
    if(random === 1){
        let i = document.createElement('i');
        i.setAttribute('class', 'fa-regular fa-hand-rock');

        computerContent.appendChild(i)
        content.appendChild(computerContent);
        return rock;
    }
    else if(random === 2)
    {
        let i = document.createElement('i');
        i.setAttribute('class', 'fa-regular fa-hand-scissors');

        computerContent.appendChild(i)
        content.appendChild(computerContent);
        return scissor;
    }
    else if(random === 3){
        let i = document.createElement('i');
        i.setAttribute('class', 'fa-regular fa-hand');

        computerContent.appendChild(i)
        content.appendChild(computerContent);
        return paper;
    }else{
        let i = document.createElement('i');
        i.setAttribute('class', 'fa-solid fa-gun');

        computerContent.appendChild(i)
        content.appendChild(computerContent);
        return gun;
    }
}

function getHumanChoice(choice){
    if(choice.toLowerCase() === rock.toLowerCase()){
        let i = document.createElement('i');
        i.setAttribute('class', 'fa-regular fa-hand-rock');
        playerContent.appendChild(i)
        content.appendChild(playerContent);
    }
    else if (choice.toLowerCase() === paper.toLowerCase())
    {
        let i = document.createElement('i');
        i.setAttribute('class', 'fa-regular fa-hand');

        playerContent.appendChild(i)
        content.appendChild(playerContent);
    }
    else if (choice.toLowerCase() === scissor.toLowerCase()){
        let i = document.createElement('i');
        i.setAttribute('class', 'fa-regular fa-hand-scissors');

        playerContent.appendChild(i)
        content.appendChild(playerContent);
    }
    else{
        return 'That option it does not exist'
    }
}

function playRound(humanChoice, computerChoice){
        if(humanChoice === rock && computerChoice === scissor){
            humanScore += 1;
            pPoints.textContent = `${humanScore} points `;
        }
        else if(humanChoice === paper && computerChoice === rock){
            humanScore += 1;
            pPoints.textContent = `${humanScore} points `;
    
        }
        else if (humanChoice === scissor && computerChoice === paper){
            humanScore += 1;
            pPoints.textContent = `${humanScore} points `;
        }
        else if(humanChoice === rock && computerChoice === paper){
            computerScore += 1;
            cPoints.textContent = `${computerScore} points `;
    
        }
        else if(humanChoice === scissor && computerChoice === rock){
            computerScore += 1;
            cPoints.textContent = `${computerScore} points `;
        }
        else if(humanChoice === paper && computerChoice === scissor){
            computerScore += 1;
            cPoints.textContent = `${computerScore} points `;

        }else if(humanChoice === rock && computerChoice === gun){
            computerScore += 1;
            cPoints.textContent = `${computerScore} points `;
            console.log(gun);

        }else if(humanChoice === paper && computerChoice === gun){
            computerScore += 1;
            cPoints.textContent = `${computerScore} points `;
            console.log(gun);


        }else if(humanChoice === scissor && computerChoice === gun){
            computerScore += 1;
            cPoints.textContent = `${computerScore} points `;
            console.log(gun);

        }
        else{
            draw.textContent = 'DRAW';
        }
    Score(humanScore);
}
function Score(humanScore){
    if(humanScore >= 5){
        console.log('you win');
        const jsConfetti = new JSConfetti()
        jsConfetti.addConfetti()
        draw.textContent = 'YOU WIN'
    }else if (computerScore >= 5){
        draw.textContent = 'COMPUTER WIN'
    }
    else{
        console.log('')
    }
}

function Reset(){
    let contentRemove = computerContent.querySelectorAll(".fa-regular")
    contentRemove.forEach(icon => icon.remove());
    let contentRemoveSolid = computerContent.querySelectorAll(".fa-solid")
    contentRemoveSolid.forEach(icon => icon.remove());

    let contentRemovePlayer = playerContent.querySelectorAll(".fa-regular")
    contentRemovePlayer.forEach(icon => icon.remove());
    computerScore = 0;
    humanScore = 0;
    cPoints.textContent = `${0} points`;
    pPoints.textContent = `${0} points `;
    draw.textContent = '';
    console.log(humanScore);
    return '';
}