console.log("")

const rockPaperSciss = ["Rock", "Paper", "Scissors"]

function getComputerChoice () {
    let randomIndex = Math.floor((Math.random() * rockPaperSciss.length))
    let computerChoice = rockPaperSciss[randomIndex]
    console.log(computerChoice)
    
}

getComputerChoice()

function getHumanChoice () {
    let humanChoice = prompt("Rock, Paper, Scissors, SHOOT!")
    console.log(humanChoice)
}

getHumanChoice()






