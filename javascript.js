
//Global variables

let humanScore = 0;
let computerScore = 0;




//Function that gives a 1/3 chance to either get "Rock", "Paper" or "Scissors" (*WORKS FINE!*)

function getComputerChoice() {
    let number = Math.random(); // Local variable
   
        if (number <= 0.3333333333333333) {
            return "Rock";
        }  
        else if (number > 0.3333333333333333 && number <= 0.666666666666666 ) {
            return "Paper";
        }
        else if (number > 0.666666666666666 ) {
            return "Scissors";
        }           
    
}

//Function that creates a user choice 

function getHumanChoice() {
    let userInput;
    while (true) {
        userInput = prompt("Input (Rock, Paper, or Scissors): ").toLowerCase();

        if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
            // Convert the input to have the first letter capitalized
            return userInput.charAt(0).toUpperCase() + userInput.slice(1);
        }

        // If input is invalid, alert the user and continue the loop
        alert("Invalid input. Please enter 'Rock', 'Paper', or 'Scissors'.");
    }
}

// Function that that takes the human and computer player choices as arguments, 
// Plays a single round, 
// Increments the round winner’s score 
// And logs a winner announcement.

function playRound() {
    
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
   

    
    
        if (humanChoice == computerChoice) {
        return `You chose ${humanChoice} and the Computer chose ${computerChoice}, \nThis round is a draw!`
        }
    //when the human wins
        else if (
        (humanChoice == "Paper" && computerChoice == "Rock") || 
        (humanChoice == "Rock" && computerChoice == "Scissors") ||
        (humanChoice == "Scissors" && computerChoice == "Paper")
        
        ){
            humanScore++;
        return `You chose ${humanChoice} and the Computer chose ${computerChoice}, \nYou win this round! \nAyman: ${humanScore} vs Computer: ${computerScore} `
        }
    
        else 
        {
            computerScore++;
        return `You chose ${humanChoice} and the Computer chose ${computerChoice}, \nThe computer wins this round! \nAyman: ${humanScore} vs Computer: ${computerScore}`
        }

        
    
}

// A function that makes sure that the playRound function is called 5 times

function playFive(){
    let i = 5;
    
    while (i > 0) {
        console.log(playRound());
        i = i - 1;
    } 
}
(playFive());