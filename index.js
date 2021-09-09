const startBtn = document.getElementById("start-btn");

let firstCard = Math.floor(Math.random() * (12 - 2) + 2);
let secondCard = Math.floor(Math.random() * (12 - 2) + 2);
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";



function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂";
    } else if (sum === 21) {
        message = "Yeaaah! You've got Blackjack! 🥳";
        hasBlackJack = true;
    } else {
        isAlive = false;
        message ="You're out of the game! 😭";
    }

    console.log(message);
}

startBtn.addEventListener("click", startGame)
 

