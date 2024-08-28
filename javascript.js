
//Global variables
computerScore = 0; //Initializing the score of the Computer
HumanScore = 0; // Initializing the score of the Human
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();




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
        alert("Invalid input. Please enter Rock, Paper, or Scissors.");
    }
}

// Function that that takes the human and computer player choices as arguments, 
// Plays a single round, 
// Increments the round winner’s score 
// And logs a winner announcement.

function playRound(humanSelection, computerSelection) {
    console.log(`You chose: ${humanSelection}`);
    console.log(`Computer chose: ${computerSelection}`);
    
    
    
    if (humanSelection == computerSelection){
        return "This is a draw! Nobody wins, go again!"
        
    }
    //When human wins
    else if (
        (humanSelection == "Rock" && computerSelection == "Scissors") || 
        (humanSelection == "Paper" && computerSelection == "Rock") ||
        (humanSelection == "Scissors" && computerSelection == "Paper") 
            ){
                
                return "You have won this round!"
            }
            
    else {(
        (computerSelection == "Rock" && humanSelection == "Scissors") || 
        (computerSelection == "Paper" && humanSelection == "Rock") ||
        (computerSelection == "Scissors" && humanSelection == "Paper")
    )
        return "The computer has won this round!"
    }
}
    //if statements if 



console.log(playRound(humanSelection, computerSelection));