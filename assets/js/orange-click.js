let orange = document.getElementById("orange-click");
let timerElement = document.getElementById("click-timer");
let clickCounter = document.getElementById("click-amount");

let gameStart = true;
let timeInterval;

// load and display high score when game starts
const highScore = localStorage.getItem("highScore") || 0;
document.getElementById("high-score").textContent = highScore;

function clickCount() {
    // click effect
    orange.classList.add("brightness-110");
    setTimeout(function() {
        orange.classList.remove("brightness-110");
    }, 100);

    // click counter
    clickCounter.textContent = parseInt(clickCounter.textContent) + 1;
    
}

// high score
function updateHighScore() {
    // Get current score and stored high score
    const currentScore = parseInt(clickCounter.textContent);
    const storedHighScore = localStorage.getItem("highScore") || 0;

    // Update high score if current score is higher
    if (currentScore > storedHighScore) {
        localStorage.setItem("highScore", currentScore);
        document.getElementById("high-score").textContent = currentScore;
    }
}

// click timer
function timer(){
    clearInterval(timeInterval);

    timeInterval = setInterval(function() {
        let timeLeft = parseInt(timerElement.textContent);
        if (timeLeft > 0 && gameStart){
            timerElement.textContent = timeLeft - 1;
        } else {
            clearInterval(timeInterval);
            // stop game
            gameStart = false;

            // Reset timer
            timerElement.textContent = 10;

            // update high score
            updateHighScore();
            
            // show overlay and record box again
            let overlay = document.getElementById("overlay");
            let recordBox = document.getElementById("record-box");
            
            // menampilkan record box
            recordBox.classList.remove("hidden");
            
            // menampilkan overlay
            overlay.classList.remove("hidden");
        }
    }, 1000);
}

function startGame(){
    let overlay = document.getElementById("overlay");
    let recordBox = document.getElementById("record-box");

    // menghilangkan record box
    recordBox.classList.add("hidden");

    // menghilangkan overlay
    overlay.classList.add("hidden");


    // start game
    gameStart = true;

    // start count from 0
    clickCounter.textContent = 0;
    
    // memulai timer permainan
    timer();
}