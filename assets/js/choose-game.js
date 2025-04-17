const cardLeft = document.querySelector(".card-left");
const cardCenter = document.querySelector(".card-center");
const cardRight = document.querySelector(".card-right");
const orangeClicker = document.getElementById("orange-clicker");
const rpsGame = document.getElementById("rps-game");
const playGround = document.getElementById("playground");
const aeFlipCard = document.getElementById("ae-flipcard");

cardLeft.addEventListener("click", () => {
    cardLeft.classList.remove("-translate-x-24", "-translate-x-0", "z-0", "brightness-50");
    cardLeft.classList.add("translate-x-28", "scale-110", "z-10", "hover:flipped");

    cardCenter.classList.remove("scale-110", "z-10", "-translate-x-28", "brightness-50", "hover:flipped");
    cardCenter.classList.add("scale-105", "z-5", "z-0", "translate-x-28", "brightness-50");

    cardRight.classList.remove("-translate-x-28", "scale-110", "z-10", "hover:flipped");
    cardRight.classList.add("translate-x-24", "z-0", "brightness-50");

    // Refresh iframe content
    orangeClicker.src = orangeClicker.src;
    rpsGame.src = rpsGame.src;
    aeFlipCard.src = aeFlipCard.src;

    orangeClicker.classList.remove("hidden");
    rpsGame.classList.add("hidden");
    aeFlipCard.classList.add("hidden");

    playGround.classList.remove("bg-bgrps");
    playGround.classList.add("bg-amber-400");
});

cardCenter.addEventListener("click", () => {
    cardCenter.classList.remove("scale-105", "z-0", "translate-x-28", "-translate-x-28", "brightness-50");
    cardCenter.classList.add("scale-110", "z-10", "hover:flipped");

    cardLeft.classList.remove("translate-x-28", "-translate-x-24", "scale-110", "z-10", "hover:flipped");
    cardLeft.classList.add("-translate-x-0", "z-0", "brightness-50");

    cardRight.classList.remove("-translate-x-28", "translate-x-24", "scale-110", "z-10", "hover:flipped");
    cardRight.classList.add("translate-x-0", "z-0", "brightness-50");

    // Refresh iframe content
    orangeClicker.src = orangeClicker.src;
    rpsGame.src = rpsGame.src;
    aeFlipCard.src = aeFlipCard.src;

    rpsGame.classList.remove("hidden");
    orangeClicker.classList.add("hidden");
    aeFlipCard.classList.add("hidden");

    playGround.classList.remove("bg-amber-400");
    playGround.classList.add("bg-bgrps");

});

cardRight.addEventListener("click", () => {
    cardRight.classList.remove("translate-x-24", "translate-x-0", "z-0", "brightness-50");
    cardRight.classList.add("-translate-x-28", "scale-110", "z-10", "hover:flipped");

    cardCenter.classList.remove("scale-110", "z-10", "translate-x-28", "brightness-50", "hover:flipped");
    cardCenter.classList.add("scale-105", "z-0", "-translate-x-28", "brightness-50");

    cardLeft.classList.remove("translate-x-28", "scale-110", "z-10", "hover:flipped");
    cardLeft.classList.add("-translate-x-24", "z-0", "brightness-50");

    // Refresh iframe content
    orangeClicker.src = orangeClicker.src;
    rpsGame.src = rpsGame.src;
    aeFlipCard.src = aeFlipCard.src;

    aeFlipCard.classList.remove("hidden");
    orangeClicker.classList.add("hidden");
    rpsGame.classList.add("hidden");

    playGround.classList.remove("bg-amber-400");
    playGround.classList.remove("bg-bgrps");

});