// keyboard controll
// enable keyboard controll
let inputEnable = true;

document.addEventListener('keydown', function(event) {
    if (!inputEnable) return; // if input is disabled, stop execution

    switch(event.key.toUpperCase()) {
        case 'J':
            rps(0); // Rock
            break;
        case 'K':
            rps(1); // Paper
            break;
        case 'L':
            rps(2); // Scissors
            break;
    }
});

// player hand choice
function rps(handSign){
    const playerHand = document.querySelector('img[alt="player-hand"]');
    let playerChoice;

    switch(handSign){
        case 0:
            playerHand.src = "./assets/img/rps-game/rock-hand-p.png";
            playerChoice = "rock";
            break;
        case 1:
            playerHand.src = "./assets/img/rps-game/paper-hand-p.png";
            playerChoice = "paper";
            break;
        case 2:
            playerHand.src = "./assets/img/rps-game/scisser-hand-p.png";
            playerChoice = "scissors";
            break;
    }

    // Get computer choice and check winner
    const computerChoice = rpsC();

    console.log("Player choice: " + playerChoice);
    console.log("Computer choice: " + computerChoice);

    checkWinner(playerChoice, computerChoice);
}

// computer hand choice
function rpsC(){
    // Generate random choice for computer
    const computerChoice = Math.floor(Math.random() * 3);
    const computerHand = document.querySelector('img[alt="computer-hand"]');
    let choice;

    switch(computerChoice){
        case 0:
            computerHand.src = "./assets/img/rps-game/rock-hand-c.png";
            choice = "rock";
            break;
        case 1:
            computerHand.src = "./assets/img/rps-game/paper-hand-c.png";
            choice = "paper";
            break;
        case 2:
            computerHand.src = "./assets/img/rps-game/scisser-hand-c.png";
            choice = "scissors";
            break;
    }
    return choice;
}

// scoring
let playerScore = 0;
let computerScore = 0;
let overlayResult = document.getElementById("overlay-result");
let gameResult = document.getElementById("game-result");
let textResult = document.getElementById("text-result");

function updateScore(winner){
    if (winner === "player"){
        playerScore++;
        document.getElementById(`player-score-${playerScore}`).classList.remove("text-whiteground");
        document.getElementById(`player-score-${playerScore}`).classList.add("text-green");
    } else if (winner === "computer") {
        computerScore++;
        document.getElementById(`computer-score-${computerScore}`).classList.remove("text-whiteground");
        document.getElementById(`computer-score-${computerScore}`).classList.add("text-black");
    }

    // check if game is over
    if (playerScore === 3 || computerScore === 3) {
        inputEnable = false; // disable input

        setTimeout(() => {
            if (playerScore === 3){
                overlayResult.classList.remove("invisible");
                overlayResult.classList.add("bg-bgrps");

                gameResult.classList.remove("invisible");
                gameResult.classList.add("bg-darkgreen");
                textResult.innerHTML = "Player<br>Wins!";
            } else {
                overlayResult.classList.remove("invisible");
                overlayResult.classList.add("bg-red-400");

                gameResult.classList.remove("invisible");
                gameResult.classList.add("bg-red-400");
                textResult.innerHTML = "Computer<br>Wins!";
            }

            // Reset game after 2 seconds
            setTimeout(() => {
                overlayResult.classList.add("invisible");
                overlayResult.classList.remove("bg-bgrps", "bg-red-400");
                gameResult.classList.add("invisible");
                gameResult.classList.remove("bg-darkgreen", "bg-red-400");
                resetGame();
                inputEnable = true; // enable input
            } ,3000);
        }, 500);
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    // Reset all score circles to white
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`player-score-${i}`).classList.remove("text-black");
        document.getElementById(`player-score-${i}`).classList.add("text-whiteground");
        document.getElementById(`computer-score-${i}`).classList.remove("text-black");
        document.getElementById(`computer-score-${i}`).classList.add("text-whiteground");
    }
}

// check winner
function checkWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return;
    }
    
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        updateScore("player");
    } else {
        updateScore("computer");
    }
}


// show guide
function showGuide(){
    let overlay = document.getElementById("overlay");
    let guide = document.getElementById("guide");

    overlay.classList.remove("invisible");
    guide.classList.remove("invisible");
}

// exit guide
function exitGuide(){
    let overlay = document.getElementById("overlay");
    let guide = document.getElementById("guide");

    overlay.classList.add("invisible");
    guide.classList.add("invisible");
}