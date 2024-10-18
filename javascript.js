// Global variables
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0; // New variable to keep track of rounds played

// Function that gives a 1/3 chance to either get "Rock", "Paper" or "Scissors"
function getComputerChoice() {
    let number = Math.random();
   
    if (number <= 0.3333333333333333) {
        return "Rock";
    }  
    else if (number <= 0.666666666666666) {
        return "Paper";
    }
    else {
        return "Scissors";
    }           
}

// Function that plays a single round
function playRound(playerSelection) {
    const computerChoice = getComputerChoice();
    const humanChoice = playerSelection; // Store the parameter in a local variable
   
    if (humanChoice === computerChoice) {
        return `You chose ${humanChoice} and the Computer chose ${computerChoice}, \nThis round is a draw!`;
    }
    //when the human wins
    else if (
        (humanChoice === "Paper" && computerChoice === "Rock") || 
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        humanScore++;
        return `You chose ${humanChoice} and the Computer chose ${computerChoice}, \nYou win this round! \nAyman: ${humanScore} vs Computer: ${computerScore}`;
    }
    else {
        computerScore++;
        return `You chose ${humanChoice} and the Computer chose ${computerChoice}, \nThe computer wins this round! \nAyman: ${humanScore} vs Computer: ${computerScore}`;
    }
}

// Creating a constant where the buttons will be appended to
const container = document.querySelector(".buttons");

// Creating three different buttons
const button1 = document.createElement("button");
const button2 = document.createElement("button");
const button3 = document.createElement("button");

// Adding text to the buttons
button1.textContent = "Rock";
button2.textContent = "Paper";
button3.textContent = "Scissors";

// Appending the buttons to the body of the html page
container.appendChild(button1);
container.appendChild(button2);
container.appendChild(button3);

// Creating a div displaying the results
const score = document.createElement("div");
score.classList.add("result-display");
container.appendChild(score); // Append the result display div

// Event listeners when button is clicked
button1.addEventListener("click", () => {
    if (roundsPlayed < 5) {
        const result = playRound("Rock");
        score.textContent = result;
        roundsPlayed++;
    }
    checkGameOver();
});

button2.addEventListener("click", () => {
    if (roundsPlayed < 5) {
        const result = playRound("Paper");
        score.textContent = result;
        roundsPlayed++;
    }
    checkGameOver();
});

button3.addEventListener("click", () => {
    if (roundsPlayed < 5) {
        const result = playRound("Scissors");
        score.textContent = result;
        roundsPlayed++;
    }
    checkGameOver();
});

// Function to check if the game is over
function checkGameOver() {
    if (roundsPlayed >= 5) {
        score.textContent += "\nGame Over! No more rounds allowed.";
        // Disable buttons
        button1.disabled = true;
        button2.disabled = true;
        button3.disabled = true;
    }
}
