const startBtn = document.getElementById("start-btn");
const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.getElementById("cards-el");
const newBtn = document.getElementById("new-btn"); 

let firstCard = Math.floor(Math.random() * (12 - 2) + 2);
let secondCard = Math.floor(Math.random() * (12 - 2) + 2);
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

function startGame() {
    renderGame();
}

function renderGame() {
    sumEl.textContent = `Sum: ${sum}`;
    cardsEl.textContent = `Cards: ${cards[0]} + ${cards[1]}`;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Yeaaah! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        isAlive = false;
        message ="You're out of the game!";
    }

    messageEl.textContent = message;
}

function newCard() {
    let newCard = Math.floor(Math.random() * (12 - 2) + 2);
    sum +=  newCard;
    cards.push(newCard);
    renderGame();
}

startBtn.addEventListener("click", startGame);
newBtn.addEventListener("click", newCard);
 

