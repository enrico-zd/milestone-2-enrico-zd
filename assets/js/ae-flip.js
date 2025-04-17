import { startTimer, stopTimer } from "./times.js"

let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let moves = 0;
let matchedPairs = 0;
const totalPairs = 8;
let gameStarted = false;
const startButton = document.querySelector(".start-button");

startButton.addEventListener("click", handleGameButton);

const gridContainer = document.getElementsByClassName("grid-card-container")[0];

document.getElementsByClassName("moves")[0].textContent = moves;
// document.getElementsByClassName("restart-button")[0].addEventListener("click", restart);

function handleGameButton() {
  if (!gameStarted) {
      // Start game
      gameStarted = true;
      moves = 0;
      document.getElementsByClassName("moves")[0].textContent = moves;
      startTimer();
      shuffleCards();
      gridContainer.innerHTML = "";
      generateCards();
      startButton.textContent = "Restart";
      startButton.classList.remove("start-button");
      startButton.classList.add("restart-button");
  } else {
      // Restart game
      resetBoard();
      shuffleCards();
      moves = 0;
      document.getElementsByClassName("moves")[0].textContent = moves;
      gridContainer.innerHTML = "";
      generateCards();
      stopTimer();
      startTimer();
  }
}

fetch("./assets/data/cards.json")
 .then((res) => res.json())
 .then((data) => {
    cards = [...data,...data];
    shuffleCards();
    generateCards();
  });

function shuffleCards(){
  let currentIndex = cards.length,
  randomIndex,
  temporaryValue;
  
  while(currentIndex !== 0){
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      temporaryValue = cards[currentIndex];
      cards[currentIndex] = cards[randomIndex];
      cards[randomIndex] = temporaryValue;
  }
}

function generateCards(){
  matchedPairs = 0;

  for (let card of cards){
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");
      cardElement.setAttribute("data-name", card.name);
      cardElement.innerHTML = `
        <div class="front rotate-y-[180deg] w-[80px] h-[98px] md:w-[110px] md:h-[136px] lg:w-[130px] lg:h-[160px] drop-shadow-lg drop-shadow-[#FF00FF]/70 rounded-xl overflow-hidden absolute">
            <img class="front-img" src="${card.image}" draggable="false">
        </div>    
        <div class="back w-[80px] h-[98px] md:w-[110px] md:h-[136px] lg:w-[130px] lg:h-[160px] drop-shadow-lg drop-shadow-[#9000FF]/40 hover:drop-shadow-[#00FFFF]/40 rounded-xl overflow-hidden bg-[#151919] absolute flex justify-center items-center">
            <img src="./assets/img/ae-flip/back-card.png" draggable="false">
        </div>
      `;
      gridContainer.appendChild(cardElement);
      cardElement.addEventListener("click", flipCard);
  }
}

function flipCard(){
  if (!gameStarted || lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flipped");

  if (!firstCard){
    firstCard = this;
    return;
  }

  secondCard = this;
  moves++;
  document.getElementsByClassName("moves")[0].textContent = moves;
  lockBoard = true;

  checkForMatch();
}

function checkForMatch(){
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;

  isMatch ? disableCards() : unflipCards();
}

function disableCards(){
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  matchedPairs++;
  if (matchedPairs === totalPairs){
    stopTimer();
    gameStarted = false;
    startButton.textContent = "Start Again!";
    startButton.classList.remove("restart-button");
    startButton.classList.add("start-button");

    // Unflip all cards after 1 second
    setTimeout(() => {
      const allCards = document.querySelectorAll('.card');
      allCards.forEach(card => {
        card.classList.remove('flipped');
      });
    }, 1000);
  }

  resetBoard();
}

function unflipCards(){
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
    resetBoard();
  }, 1000);
}

function resetBoard(){
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}
