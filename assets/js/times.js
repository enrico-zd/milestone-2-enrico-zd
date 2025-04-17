let timer;
let secondsElapsed = 0;

export function startTimer(){
    clearInterval(timer);
    secondsElapsed = 0;
    updateTimerDisplay();
    timer = setInterval(() => {
       secondsElapsed++; 
       updateTimerDisplay();
    }, 1000);
}

function updateTimerDisplay(){
    const minutes = String(Math.floor(secondsElapsed / 60)).padStart(2, "0");
    const seconds = String(secondsElapsed % 60).padStart(2, "0");
    document.getElementsByClassName("times")[0].textContent = `${minutes}:${seconds}`;
}

export function stopTimer(){
    clearInterval(timer);
}