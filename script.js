console.log("")

const rockPaperSciss = ["Rock", "Paper", "Scissors"]

function getComputerChoice () {
    let randomIndex = Math.floor((Math.random() * rockPaperSciss.length))
    let choice = rockPaperSciss[randomIndex]
    console.log(choice)
    
}

getComputerChoice()