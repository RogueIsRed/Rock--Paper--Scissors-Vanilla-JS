const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const scoreDisplay = document.getElementById('score')

let userChoice
let computerChoice
let result
let userScore = 0
let ComputerScore = 0

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
    colorChange()
    keepingScore()
}))  

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 4)
    
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }

    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }

    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'It\'s a draw' 
    }

    if (computerChoice === 'rock' && userChoice === 'paper' 
     || computerChoice === 'scissors' && userChoice === 'rock' 
     || computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You Win!!' 
    }

    if (computerChoice === 'scissors' && userChoice === 'paper' 
     || computerChoice === 'rock' && userChoice === 'scissors' 
     || computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You Lose...' 
    }
    resultDisplay.innerHTML = result
}

function colorChange() {
    if (result === 'You Win!!') {
        document.body.style.backgroundColor = 'green'
    } else if (result === 'You Lose...') { 
        document.body.style.backgroundColor = 'red'
    } else if (result === 'It\'s a draw') {
        document.body.style.backgroundColor = 'white'
    }
}

function keepingScore () {
    if (result === 'You Win!!') {
        userScore = userScore + 1; 
    } else if (result === 'You Lose...') {
        userScore = userScore - 1;
    }

    scoreDisplay.innerHTML = userScore
}

